import Notes from './Notes';
import TagListSuggestion from './TagListSuggestion';

import useNoteList from '../utils/useNoteList';
import useTagList from '../../Hooks/useTagList';
import useDeleteNoteRequest from '../../Hooks/useDeleteNoteRequest';

import { TextField, Grid, Typography } from '@mui/material';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../Constants/endpoints';

export default function ReadNoteListPage(props) {

    const navigate = useNavigate();

    const isLoggedIn = (sessionStorage.getItem("tokenType"));
    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate(`../${LOGIN_URL}`);
        }
    }, [navigate, isLoggedIn])
    
    const [fetchMethod, setFetchMethod] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);

    const { noteList, setNoteList, isLoading, hasMore } = useNoteList(fetchMethod, query, page);
    const { tagList } = useTagList(query);

    const onTagClick = (query) => {
        setFetchMethod('tag');
        setQuery(query);
        setPage(0);
    }

    const observer = useRef();
    const lastNoteRef = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });

        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    const deleteNoteRequest = useDeleteNoteRequest();
    function onNoteDelete(noteId) {
        deleteNoteRequest(noteId, () => {
            const newNoteList = noteList.filter(note => (note.id !== noteId));
            setNoteList(newNoteList);
        })
    }

    // If it has been more than ? seconds since the user typed search input, trigger search
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    useEffect(() => {
        let timeout;
        if (inputValue !== '') {
            timeout = setTimeout(() => {
                setPage(0);
                if (inputValue[0] === '#') {
                    setQuery(inputValue.slice(1));
                    setFetchMethod('tag');
                } else {
                    setQuery(inputValue);
                    setFetchMethod('');
                }
            }, 500);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [inputValue]);

    return (
        <Grid container spacing={5}>
            <Grid
                container
                item
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
            >
                <Grid item container xs={12} md={8} lg={4} xl={3}>
                    <TextField
                        id="note-search-input-field"
                        label="Search Notes"
                        placeholder='Title or Content / #Tag'
                        helperText={`Current query: ` + (fetchMethod ? `#${query}` : query)}
                        variant="outlined"
                        fullWidth
                        focused
                        onChange={handleInputChange} />
                </Grid>

                <Grid item container>
                    <Grid container justifyContent="center">
                        <Typography variant='h4'>Recommended tags</Typography>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid container justifyContent="center" sx={{marginTop: 1}}>
                            <TagListSuggestion tagList={tagList} onTagClick={onTagClick} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container item>
                <Notes noteList={noteList} lastNoteRef={lastNoteRef} onNoteDelete={onNoteDelete} tagList={tagList} onTagClick={onTagClick} />
            </Grid>

            <Grid container item>
                {isLoading ? <p>Loading...</p> : <p></p>}
            </Grid>

        </Grid>

    );
}