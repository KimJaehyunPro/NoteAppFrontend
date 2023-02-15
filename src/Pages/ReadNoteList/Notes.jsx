import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";
import { NOTE_API_URL, UPDATE_NOTE_URL } from "../../Constants/endpoints";

import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

const TagSection = (props) => {
    const { tags } = props;
    return (
        <Stack direction="row" spacing={1}>
            {tags.map((tag) =>
                <Chip key={tag.id} label={tag.name} />
            )}
        </Stack>
    )
}

const NoteBodySection = (props) => {
    const { id, title, content } = props
    const maxContentCharacterLength = 100;
    return (
        <>
            <Typography variant="caption">{id}</Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography>{
                ((content.length > maxContentCharacterLength) ?
                    `${content.slice(0, maxContentCharacterLength)} ...` : content)
            }</Typography>
        </>
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
            <Button style={buttonStyle} color="success" variant="outlined" href={`${NOTE_API_URL}/${noteId}`} startIcon={<AutoStoriesRoundedIcon />}>View</Button>
            <Button style={buttonStyle} color="secondary" variant="outlined" href={`${UPDATE_NOTE_URL}/${noteId}`} startIcon={<BorderColorRoundedIcon />}>Edit</Button>
            <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon />} onClick={() => {
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
                    <Paper elevation={2} key={note.id} sx={{ margin: 2, padding: 3 }}>
                        <Stack spacing={1}>
                            <NoteBodySection id={note.id} title={note.title} content={note.content} />
                            <TagSection tags={note.tags} />
                            <ActionButtonSection noteList={noteList} noteId={note.id} setNoteList={setNoteList} />
                        </Stack>
                    </Paper>
                );
            })}
        </div>
    )
}