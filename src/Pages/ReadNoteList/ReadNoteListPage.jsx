import Notes from './Notes';
import useNoteList from './utils/useNoteList';

import {NOTE_API_URL} from '../../Constants/endpoints';

import { Typography, Box } from '@mui/material';
import React, {useState, useEffect} from 'react';

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
                const notes = data.content;

                setNoteList(prevNotes => {
                    const finalNotes = prevNotes;
                    notes.forEach((note) => {
                        finalNotes.push(note);
                    })
                    return finalNotes;
                })

                // If there is note, add 1 to the page
                if (notes.length > 0) {
                    setPage(prevPage => prevPage + 1);
                } else {
                    // If there is no note, DO NOT listen to 'scroll' event anymore, since there's no note to get anyway.
                    window.removeEventListener('scroll', handleScroll);
                    document.getElementById(`no-more-notes`).style.display = "flex";
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
            <div>
                {noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList}/> : <EmptyNotes/>}
                <Box id="no-more-notes" sx={{display: "none"}}>There is no more notes.</Box>
            </div>
    );

    // const [noteList, setNoteList] = useNoteList();

    // return (
    //     noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />
    // )
}