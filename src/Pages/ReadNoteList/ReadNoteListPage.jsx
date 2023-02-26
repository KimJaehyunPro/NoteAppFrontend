import Notes from './Notes';
import useNoteList from './utils/useNoteList';
import { GET_NOTE_LIST_PAGE_SIZE, GET_NOTE_LIST_SORT } from '../../Constants/constants';
import { NOTE_API_URL } from '../../Constants/endpoints';

import { Typography, Box, TextField, Grid } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

function NoteSearchInputField(props) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
      let timeout;
      if (inputValue !== '') {
        timeout = setTimeout(() => {
          hello();
        }, 500);
      }
      return () => clearTimeout(timeout);
    }, [inputValue]);
   
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
  
    const hello = () => {
      console.log('Load note list.');
    };

    return (
        <TextField id="note-search-input-field" label="Search Notes" placeholder='#Tag / Title or Content ' variant="outlined" fullWidth onChange={handleChange} />
    )
}

export default function ReadNoteListPage(props) {
    const [searchParams] = useSearchParams();

    const fetchMethod = searchParams.get('fetchMethod');
    const query = searchParams.get('query');

    const [noteList, setNoteList] = useNoteList(fetchMethod, query);
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    return (
        <Grid2 container spacing={2} sx={{ height: '101vh' }}>
            <Grid2 xs="auto" sm={8} md={6} lg={4} xl={3} sx={{ margin: "auto", height: "auto" }}>
                <NoteSearchInputField />
            </Grid2>
            <Grid2>
                {noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />}
                {isNotesAllLoaded && <Box>There is no more notes.</Box>}
            </Grid2>
        </Grid2>
    );
}