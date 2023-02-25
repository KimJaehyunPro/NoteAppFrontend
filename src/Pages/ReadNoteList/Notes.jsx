import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";
import { NOTE_API_URL, UPDATE_NOTE_URL } from "../../Constants/endpoints";

import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import { useNavigate } from "react-router-dom";
import { NOTE_URL } from "../../Constants/endpoints";
import { FETCH_METHOD_SEARCH_TAG } from "../../Constants/constants";

const themeColor = "#1976d2"

const NoteBodySection = (props) => {
    const { title, content } = props
    const maxContentCharacterLength = 100;
    return (
        <>
            <Typography variant="h6">{title}</Typography>
            <Typography>{
                ((content.length > maxContentCharacterLength) ?
                    `${content.slice(0, maxContentCharacterLength)} ...` : content)}
            </Typography>
        </>
    )
}

const TagSection = (props) => {
    const { tags } = props;

    const navigate = useNavigate();

    return (
        <Stack direction="row" spacing={1}>
            {tags.map((tag) =>
                <Chip key={tag.id} label={tag.name} onClick={() => {
                    navigate(`/${NOTE_URL}?fetchMethod=${FETCH_METHOD_SEARCH_TAG}&query=${tag.name}`);
                    navigate(0);
                }} />
            )}
        </Stack>
    )
}

const ActionButtonSection = (props) => {
    const { noteList, noteId, setNoteList } = props;
    const deleteNoteRequest = useDeleteNoteRequest();
    const buttonStyle = {
        "borderRadius": "20px"
    }

    return (
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button style={buttonStyle} color="success" variant="outlined" href={`${NOTE_API_URL}/${noteId}`}
                startIcon={<AutoStoriesRoundedIcon />}>View</Button>
            <Button style={buttonStyle} color="secondary" variant="outlined" href={`${UPDATE_NOTE_URL}/${noteId}`}
                startIcon={<BorderColorRoundedIcon />}>Edit</Button>
            <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon />}
                onClick={() => {
                    deleteNoteRequest(noteId, () => {
                        const noteListWithoutDeletedNote = noteList.filter(n => n.id !== noteId);
                        setNoteList(noteListWithoutDeletedNote)
                    });
                }}>Delete</Button>
        </Stack>
    )
}

export default function Notes(props) {
    const { noteList, setNoteList } = props;
    return (
        <div>
            {noteList.map((note) => {
                return (
                    <Paper elevation={2} key={note.id} sx={{ margin: 2, padding: 3, border: 3, borderColor: themeColor, borderRadius: "30px" }}>
                        <Stack spacing={1}>
                            <NoteBodySection title={note.title} content={note.content} />
                            <TagSection tags={note.tags} />
                            <ActionButtonSection noteList={noteList} noteId={note.id} setNoteList={setNoteList} />
                        </Stack>
                    </Paper>
                );
            })}
        </div>
    )
}