import Notes from './Notes';
import useNoteList from './utils/useNoteList';
import { GET_NOTE_LIST_PAGE_SIZE, GET_NOTE_LIST_SORT } from '../../Constants/constants';
import { NOTE_API_URL } from '../../Constants/endpoints';

import { Typography, Box, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {
    const [searchParams] = useSearchParams();

    const fetchMethod = searchParams.get('fetchMethod');
    const query = searchParams.get('query');

    let [noteList, setNoteList] = useNoteList(fetchMethod, query);
    const [isNotesAllLoaded, setIsNotesAllLoaded] = useState(false);
    const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${fetchMethod ? `search/${fetchMethod}` : ''}?${query ? `query=${query}&` : ''}page=${page}&size=${GET_NOTE_LIST_PAGE_SIZE}&sort=${GET_NOTE_LIST_SORT}`)
            .then(response => response.json())
            .then(data => {
                const notes = data.content;
                setNoteList(prevNotes => prevNotes.concat(notes));

                // If there is note, add 1 to the page
                if (notes.length > 0) {
                    setPage(prevPage => prevPage + 1);
                } else {
                    // If there is no note, DO NOT listen to 'scroll' event anymore, since there's no note to get anyway.
                    setIsNotesAllLoaded(true);
                }
            })
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
            window.removeEventListener('scroll', handleScroll);
            fetchMoreData();
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const [inputValue, setInputValue] = useState('');
    const [settledInputValue, setSettledInputValue] = useState('');

    // If it has been more than ? seconds since the user typed search input, trigger search
    useEffect(() => {
        let timeout;
        if (inputValue !== '') {
            timeout = setTimeout(() => {
                setSettledInputValue(inputValue);
            }, 500);
        }
        return () => clearTimeout(timeout);
    }, [inputValue]);


    // When search is triggered, Change the noteList
    useEffect(() => {
        if (settledInputValue === '') return;

        console.log('Loading note list.');

        let fetchMethod;
        let query;
        // If there is # in the beginning, the user is searching for notes with a specific tag.
        if (settledInputValue[0] === '#') {
            fetchMethod = 'tag';
            query = settledInputValue.slice(1);
        } else {
            fetchMethod = '';
            query = settledInputValue;
        }

        console.log(`fetchMethod: ${fetchMethod}`);
        console.log(`query: ${query}`);

        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${fetchMethod ? `search/${fetchMethod}` : 'search/'}?${query ? `query=${query}&` : ''}page=${0}&size=${GET_NOTE_LIST_PAGE_SIZE}&sort=${GET_NOTE_LIST_SORT}`)
            .then(response => response.json())
            .then(data => {
                setNoteList(data.content);
            });


    }, [settledInputValue])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    return (
            <Grid2 container spacing={2} sx={{ height: '101vh' }}>
                <Grid2>
                    <TextField
                    id="note-search-input-field"
                    label="Search Notes"
                    placeholder='#Tag / Title or Content '
                    helperText="Please enter your name"
                    variant="outlined"
                    focused
                    onChange={handleInputChange} />
                </Grid2>
                <Grid2 container>
                    {noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />}
                    {isNotesAllLoaded && <Box>There is no more notes.</Box>}
                </Grid2>
            </Grid2>

    );
}