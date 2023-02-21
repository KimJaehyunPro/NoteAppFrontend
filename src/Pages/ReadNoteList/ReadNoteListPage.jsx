import Notes from './Notes';
import useNoteList from './utils/useNoteList';

import { NOTE_API_URL } from '../../Constants/endpoints';

import { Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const [noteList, setNoteList] = useNoteList();
    const [isNotesAllLoaded, setIsNotesAllLoaded] = useState(false);
    const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/?page=${page}&size=5&sort=id,desc`)
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
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            window.removeEventListener('scroll', handleScroll);
            fetchMoreData();
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);
    return (
        <div style={{ height: '101vh' }}>
            {noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />}
            {isNotesAllLoaded && <Box>There is no more notes.</Box>}
        </div>
    );
}