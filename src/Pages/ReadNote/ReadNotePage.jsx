import { Paper, Typography, Button, Stack, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from 'react';

import useNote from "../../Hooks/useNote";
import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";

import { UPDATE_NOTE_URL } from "../../Constants/endpoints";

import TagSection from "../ReadNoteList/TagSection";
import dateHandler from "../utils/dateHandler";
import getDateDifference from "../utils/getDateDifference";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import ReadNoteMarkdown from "./ReadNoteMarkdown";

export default function ReadNotePage(props) {
    const { noteId } = useParams();
    const { title, content, tags, creationTimestamp, lastOpenTimestamp, isLoading } = useNote(noteId);

    const deleteNoteRequest = useDeleteNoteRequest();

    const buttonStyle = {
        "borderRadius": "20px"
    }

    return (
        <Paper elevation={3} sx={{ border: 1, padding: 4, borderColor: "black" }}>
            <Stack spacing={3}>
                <Typography variant="h3">{title}</Typography>
                <Typography sx={{"textAlign": "right"}}>Learnt {isLoading ? "Loading..." : getDateDifference(lastOpenTimestamp, noteId)} days ago.</Typography>   

                <Stack spacing={3}>
                    <ReadNoteMarkdown content={content}/>

                    <TagSection tags={tags} />

                    <Grid container direction="column" alignContent="flex-end">
                        <Typography>Created: {dateHandler(creationTimestamp)}</Typography>
                        <Typography>Opened: {dateHandler(lastOpenTimestamp)}</Typography>
                    </Grid>

                    <Stack direction="row" justifyContent="flex-end" spacing={1}>
                        <Button style={buttonStyle} color="secondary" variant="outlined" href={`../${UPDATE_NOTE_URL}/${noteId}`} startIcon={<BorderColorRoundedIcon />}>Edit</Button>
                        <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon />} onClick={() => {
                            deleteNoteRequest(noteId);
                        }}>Delete</Button>
                    </Stack>

                </Stack>
            </Stack>
        </Paper>
    )
}