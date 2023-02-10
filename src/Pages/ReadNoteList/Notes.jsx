import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";

import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

export default function Notes(props) {

    const { noteList } = props;
    const maxContentCharacterLength = 100;

    const deleteNoteRequest = useDeleteNoteRequest();

    const buttonStyle = {
        "borderRadius": "20px"
    }

    return (
        <div>
            {noteList.map((note) => {
                return (
                    <Paper elevation={2} key={note.noteId} sx={{ margin: 2, padding: 3 }}>
                        <Stack spacing={1}>
                            <Typography variant="caption">{note.noteId}</Typography>
                            <Typography variant="h6">{note.title}</Typography>
                            <Typography>{
                                ((note.content.length > maxContentCharacterLength) ?
                                    `${note.content.slice(0, maxContentCharacterLength)} ...` : note.content)
                            }</Typography>
                            <Stack direction="row" spacing={1}>
                                {note.tags.map((tag) =>
                                    <Chip key={tag.id} label={tag.name} />
                                )}
                            </Stack>

                            <Stack direction="row" justifyContent="flex-end" spacing={2}>
                                <Button style={buttonStyle} color="success" variant="outlined" href={`note/${note.noteId}`} startIcon={<AutoStoriesRoundedIcon/>}>View</Button>
                                <Button style={buttonStyle} color="secondary" variant="outlined" href={`/note/update/${note.noteId}`} startIcon={<BorderColorRoundedIcon/>}>Edit</Button>
                                <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon/>}  onClick={() => {
                                    deleteNoteRequest(note.noteId);
                                }}>Delete</Button>
                            </Stack>
                        </Stack>
                    </Paper>
                );
            })}
        </div>
    )
}