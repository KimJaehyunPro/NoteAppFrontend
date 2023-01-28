import { Paper, Fab } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from 'react';
import useNote from "../../Hooks/useNote";

import EditIcon from '@mui/icons-material/Edit';

export default function ReadNotePage(props) {
    const { noteId } = useParams();
    const [id, title, content] = useNote(noteId);

    return (
        <Paper elevation={3}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{content}</p>
            <Fab color="secondary" aria-label="update" href={`/notes/update/${id}`}>
                <EditIcon />
            </Fab>
        </Paper>
    )
}