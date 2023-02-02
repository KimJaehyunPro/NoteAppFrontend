import deleteNoteRequest from "./utils/deleteNoteRequest";

import { Button, Chip, Paper, Stack, Typography } from "@mui/material";

export default function Notes(props) {

    const { noteList, setNoteList } = props;
    const maxContentCharacterLength = 100;

    return (
        <div>
            {noteList.map((note) => {
                return (
                    <Paper elevation={2} key={note.noteId} style={{ "margin": "10px" }}>
                        <Typography>{note.noteId}</Typography>
                        <Typography>{note.title}</Typography>
                        <Typography>{
                        ((note.content.length > maxContentCharacterLength) ? 
                        `${note.content.slice(0, maxContentCharacterLength)} ...` : note.content)
                        }</Typography>
                        <Stack direction="row" spacing={1}>
                            {note.tags.map((tag) =>
                                <Chip key={tag.id} label={tag.tagName}/>
                            )}
                        </Stack>
                        <Button href={`note/${note.noteId}`}>View</Button>
                        <Button onClick={() => {
                            deleteNoteRequest(note.noteId, setNoteList);
                        }}>Delete</Button>
                    </Paper>
                );
            })}
        </div>
    )
}