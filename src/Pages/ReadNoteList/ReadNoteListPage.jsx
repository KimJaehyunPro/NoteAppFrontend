import Notes from './Notes';
import useNoteList from './utils/useNoteList';

import { Typography, TextField, Grid } from '@mui/material';
import React, { useState, useEffect, useRef, useCallback } from 'react';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const [fetchMethod, setFetchMethod] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');

    const [page, setPage] = useState(0);

    const { noteList, isLoading, hasMore } = useNoteList(fetchMethod, query, page);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const observer = useRef();
    const lastNoteRef = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                console.log(`entries[0] is intersecting.`);
                setPage(prevPage => prevPage + 1);
            }
        });

        if (node) observer.current.observe(node);
        console.log(`node: ${node}`);
    }, [isLoading, hasMore]);

    // If it has been more than ? seconds since the user typed search input, trigger search
    useEffect(() => {

        let timeout;
        if (inputValue !== '') {
            timeout = setTimeout(() => {
                setPage(0);
                if (inputValue[0] === '#') {
                    console.log('tagged!');
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
        <Grid container spacing={2}>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >

                <Grid container
                    xs={12}
                    md={8}
                    lg={4}
                    xl={3}>
                    <TextField
                        id="note-search-input-field"
                        label="Search Notes"
                        placeholder='#Tag / Title or Content '
                        helperText="Please enter your name"
                        variant="outlined"
                        fullWidth
                        focused
                        onChange={handleInputChange} />
                </Grid>

            </Grid>


            <Grid container>
                <Notes noteList={noteList} lastNoteRef={lastNoteRef} />
            </Grid>
            <Grid>
                {isLoading ? <p>Loading...</p> : <p>Loading finished</p>}
            </Grid>
        </Grid>

    );
}