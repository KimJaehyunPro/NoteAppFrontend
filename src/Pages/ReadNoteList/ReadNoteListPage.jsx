import Notes from './Notes';
import useNoteList from './utils/useNoteList';

import { NOTE_API_URL } from '../../Constants/endpoints';

import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const [noteList, setNoteList] = useNoteList();
    const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/?page=${page}&size=5&sort=id,desc`)
            .then(response => response.json())
            .then(data => {
                console.log(page);
                const notes = data.content;
                console.log(notes);
                console.log(notes[0]);

                setNoteList(prevNotes => {
                    const finalNotes = prevNotes;
                    notes.forEach((note) => {
                        finalNotes.push(note);
                    })
                    return finalNotes;
                })

                // If there is no note, DO NOT listen to 'scroll' event anymore, since there's no note to get anyway.
                if (notes.length === 0) {
                    window.removeEventListener('scroll', handleScroll);
                } else {
                    setPage(prevPage => prevPage + 1);
                }
            })
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            fetchMoreData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        }, [page]);

    return (
        noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />
    );

    // const [noteList, setNoteList] = useNoteList();

    // return (
    //     noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />
    // )
}