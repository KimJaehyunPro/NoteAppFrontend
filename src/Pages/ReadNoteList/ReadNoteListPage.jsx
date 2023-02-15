import Notes from './Notes';
import useNoteList from './utils/useNoteList';
import * as React from 'react';

import { Typography } from '@mui/material';

const EmptyNotes = () => {
    return <Typography>No notes found.</Typography>
}

export default function ReadNoteListPage(props) {

    const [noteList, setNoteList] = useNoteList();

    return (
        noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <EmptyNotes />
    )
}