import { Paper, Fab } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from 'react';
import useNote from "../../Hooks/useNote";

import EditIcon from '@mui/icons-material/Edit';

export default function ReadNotePage(props) {
    const { noteId } = useParams();
    const [title, content, tags, isLoading] = useNote(noteId);

    return (
        <Paper elevation={3}>
            <p>{noteId}</p>
            <p>{title}</p>
            <p>{content}</p>
            <Fab color="secondary" aria-label="update" href={`/note/update/${noteId}`}>
                <EditIcon />
            </Fab>
        </Paper>
    )
}