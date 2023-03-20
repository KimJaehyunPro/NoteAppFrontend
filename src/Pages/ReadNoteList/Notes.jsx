import { NOTE_URL, UPDATE_NOTE_URL } from "../../Constants/endpoints";

import { useNavigate } from "react-router-dom";

import { Stack, Grid, Typography, Card, CardActionArea, CardHeader, CardContent, IconButton } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import dateHandler from "../utils/dateHandler";

import TagSection from "./TagSection";

const NoteBodySection = (props) => {
    const { content } = props
    const maxContentCharacterLength = 200;
    return (
        <Typography>{
            ((content.length > maxContentCharacterLength) ?
                `${content.slice(0, maxContentCharacterLength)} ...` : content)}
        </Typography>
    )
}

const ActionButtonSection = (props) => {
    const { noteId, onNoteDelete } = props;

    // const deleteNoteRequest = useDeleteNoteRequest();
    const navigate = useNavigate();

    return (
        <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ marginLeft: "auto" }}
            onMouseDown={event => event.stopPropagation()}
            onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
            }}>

            <IconButton onClick={() => {
                navigate(`/${UPDATE_NOTE_URL}/${noteId}`);
            }}>
                <BorderColorRoundedIcon />
            </IconButton>
            <IconButton onClick={() => {
                onNoteDelete(noteId);
            }}>
                <DeleteRoundedIcon />
            </IconButton>
        </Stack>
    )
}

export default function Notes(props) {
    const { noteList, lastNoteRef, onNoteDelete, onTagClick } = props;
    const navigate = useNavigate();

    return (
        <Grid container spacing={1}>
            {noteList.map((note, index) => {
                const { id: noteId, title, content, tags } = note;
                const isLastNote = ((index + 1) === noteList.length);

                return (
                    <Grid item ref={isLastNote ? lastNoteRef : null} xs={12} md={6} lg={4} xl={3} key={noteId}>
                        <Card variant="outlined">
                            <CardActionArea component="div" sx={{ padding: 2 }} onClick={() => { navigate(`/${NOTE_URL}/${noteId}`); }}>
                                <CardHeader title={title} action={<ActionButtonSection noteId={noteId} onNoteDelete={onNoteDelete} />}>
                                </CardHeader>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <NoteBodySection content={content} />
                                        <Grid container justifyContent="right">
                                            <TagSection tags={tags} onTagClick={onTagClick} />
                                        </Grid>
                                        <Typography variant="h7">Created: {dateHandler(note.creationTimestamp)}</Typography>
                                        <Typography variant="h7">Opened: {dateHandler(note.lastOpenTimestamp)}</Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}