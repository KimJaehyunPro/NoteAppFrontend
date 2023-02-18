import Notes from './Notes';
import useNoteList from './utils/useNoteList';

import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const [noteList, setNoteList] = useNoteList();
    const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        setNoteList(prevNotes => [
            ...prevNotes,
            { id: 1, title: "hey", content: "Ahoy!", tags: [{id: 53, name: "foo"}] }
        ]);
        setPage(prevPage => prevPage + 1);
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            fetchMoreData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />
    );

    // const [noteList, setNoteList] = useNoteList();

    // return (
    //     noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />
    // )
}