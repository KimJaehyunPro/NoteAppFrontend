import Notes from './Notes';

import { NOTE_API_URL } from '../../Constants/endpoints';

import { Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useNoteList from './utils/useNoteList';

import { GET_NOTE_LIST_PAGE_SIZE, GET_NOTE_LIST_SORT } from '../../Constants/constants';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const { fetchMethod, query } = props;
    const [noteList, setNoteList] = useNoteList(fetchMethod, query);
    const [isNotesAllLoaded, setIsNotesAllLoaded] = useState(false);
    const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        console.log("FetchMoreData happening");
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${fetchMethod ? fetchMethod : ''}?${query ? `query=${query}&` : ''}page=${page}&size=${GET_NOTE_LIST_PAGE_SIZE}&sort=${GET_NOTE_LIST_SORT}`)
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

    // EventListener -> handlesScroll 1
    //
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    return (
        <div style={{ height: '101vh' }}>
            {noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />}
            {isNotesAllLoaded && <Box>There is no more notes.</Box>}
        </div>
    );
}