import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";
import { NOTE_API_URL, UPDATE_NOTE_URL } from "../../Constants/endpoints";

import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

export default function Notes(props) {

    const { noteList, setNoteList } = props;
    const maxContentCharacterLength = 100;

    const deleteNoteRequest = useDeleteNoteRequest();

    const buttonStyle = {
        "borderRadius": "20px"
    }

    return (
        <div>
            {noteList.map((note) => {
                return (
                    <Paper elevation={2} key={note.id} sx={{ margin: 2, padding: 3 }}>
                        <Stack spacing={1}>
                            <Typography variant="caption">{note.id}</Typography>
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
                                <Button style={buttonStyle} color="success" variant="outlined" href={`${NOTE_API_URL}/${note.id}`} startIcon={<AutoStoriesRoundedIcon/>}>View</Button>
                                <Button style={buttonStyle} color="secondary" variant="outlined" href={`${UPDATE_NOTE_URL}/${note.id}`} startIcon={<BorderColorRoundedIcon/>}>Edit</Button>
                                <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon/>}  onClick={() => {
                                    deleteNoteRequest(note.id, () => {
                                        const noteListWithoutDeletedNote = noteList.filter(n => n.id !== note.id);
                                        setNoteList(noteListWithoutDeletedNote)
                                    });
                                }}>Delete</Button>
                            </Stack>
                        </Stack>
                    </Paper>
                );
            })}
        </div>
    )
}