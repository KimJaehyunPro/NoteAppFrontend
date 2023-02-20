import { Paper, Typography, Button, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import useNote from "../../Hooks/useNote";

import { UPDATE_NOTE_URL } from "../../Constants/endpoints";

import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

export default function ReadNotePage(props) {
    const { noteId } = useParams();
    const [title, content] = useNote(noteId);

    const deleteNoteRequest = useDeleteNoteRequest();

    const buttonStyle = {
        "borderRadius": "20px"
    }

    return (
        <Paper elevation={3}>
            <Stack spacing={2}>
                <Typography>{noteId}</Typography>
                <Typography>{title}</Typography>
                <ReactMarkdown>{content}</ReactMarkdown>

                <Stack direction="row" justifyContent="flex-end">
                    <Button style={buttonStyle} color="secondary" variant="outlined" href={`../${UPDATE_NOTE_URL}/${noteId}`} startIcon={<BorderColorRoundedIcon />}>Edit</Button>
                    <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon />} onClick={() => {
                        deleteNoteRequest(noteId);
                    }}>Delete</Button>
                </Stack>

            </Stack>
        </Paper>
    )
}