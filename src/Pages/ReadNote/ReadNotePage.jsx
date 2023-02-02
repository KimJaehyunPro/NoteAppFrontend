import { Paper, Fab, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from 'react';
import useNote from "../../Hooks/useNote";

import EditIcon from '@mui/icons-material/Edit';

export default function ReadNotePage(props) {
    const { noteId } = useParams();
    const [title, content] = useNote(noteId);

    return (
        <Paper elevation={3}>
            <Typography>{noteId}</Typography>
            <br/>
            <Typography>{title}</Typography>
            <br/>
            <Typography style={{whiteSpace: 'pre-line'}}>{content}</Typography>
            <Fab color="secondary" aria-label="update" href={`/note/update/${noteId}`}>
                <EditIcon />
            </Fab>
        </Paper>
    )
}