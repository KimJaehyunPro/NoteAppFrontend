import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";
import { UPDATE_NOTE_URL } from "../../Constants/endpoints";

import { Chip, Stack, Grid, Typography, Card, CardActionArea, CardHeader, CardContent, IconButton } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import { useNavigate } from "react-router-dom";
import { NOTE_URL } from "../../Constants/endpoints";

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

const TagSection = (props) => {
    const { tags, onTagClick } = props;

    const style = {
        "marginTop": 2,
        "width": "fit-content"
    };


    return (
        <Stack direction="row" spacing={1} sx={style}
            onMouseDown={event => event.stopPropagation()}
            onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
            }}
        >
            {tags.map((tag) =>
                <Chip key={tag.id} size="small" label={tag.name} onClick={() => {
                    onTagClick?.(tag.name);
                }} />
            )}
        </Stack>
    )
}

const ActionButtonSection = (props) => {
    const { noteList, setNoteList, noteId } = props;
    const deleteNoteRequest = useDeleteNoteRequest();
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
                deleteNoteRequest(noteId, () => {
                    const noteListWithoutDeletedNote = noteList.filter(n => n.id !== noteId);
                    setNoteList(noteListWithoutDeletedNote)
                });
            }}>
                <DeleteRoundedIcon />
            </IconButton>
        </Stack>
    )
}

function dateHandler(localDateTime) {
    const dateObj = new Date(localDateTime);
    const formattedDate = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) + ", " + dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    return formattedDate;
}


export default function Notes(props) {
    const { noteList, setNoteList, lastNoteRef, onTagClick } = props;
    const navigate = useNavigate();

    return (
        <Grid container spacing={1}>
            {noteList.map((note, index) => {

                const { id: noteId, title, content, tags } = note;


                const isLastNote = ((index + 1) === noteList.length);

                return (
                    <Grid item ref={isLastNote ? lastNoteRef : null} xs={12} md={6} lg={4} xl={3} key={noteId}>
                        <Card variant="outlined">
                            <CardActionArea sx={{ padding: 2 }} onClick={() => { navigate(`/${NOTE_URL}/${noteId}`); }}>
                                <CardHeader title={title} action={<ActionButtonSection noteList={noteList} setNoteList={setNoteList} noteId={noteId} />}>
                                </CardHeader>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <NoteBodySection content={content} />
                                        <TagSection tags={tags} onTagClick={onTagClick} />
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