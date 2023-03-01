import Notes from './Notes';
import useNoteList from './utils/useNoteList';

import { Typography, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const [fetchMethod, setFetchMethod] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');

    const [page, setPage] = useState(1);

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
                <div>
                    {noteList ? noteList.map((note, index) => {
                        if (noteList.length === index + 1) {
                            return <div key={note.id} ref={lastNoteRef}>{note.title}. Last element!</div>
                        } else {
                            return <div key={note.id}>{note.title}</div>
                        }
                    }) : <div>No note is found.</div>}
                </div>
            </Grid2>
            <Grid2>
                <div>isLoading?: {isLoading}</div>
            </Grid2>
        </Grid2>

    );
}