import useCreateNote from '../../Hooks/useCreateNote';

import { Box, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function CreateNotePage(props) {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const createNote = useCreateNote();

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >   

            <TextField
                id='note-title'
                label="Title"
                multiline
                onChange={e => { setTitle(e.target.value) }}
            />

            <TextField
                id='note-content'
                label="Content"
                multiline
                rows={20}
                onChange={e => { setContent(e.target.value) }}
            />

            <Button onClick={() => { createNote(title, content) }} variant="contained">Write</Button>
        </Box>
    )
}