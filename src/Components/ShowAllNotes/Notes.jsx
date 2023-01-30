import deleteNoteRequest from "./utils/deleteNoteRequest";

import { Button, Chip, Paper, Stack, Typography } from "@mui/material";

export default function Notes(props) {

    const { notes, setNotes } = props;

    return (
        <div>
            {notes.map((note) => {
                return (
                    <Paper elevation={2} key={note.noteId} style={{ "margin": "10px" }}>
                        <Typography>{note.noteId}</Typography>
                        <Typography>{note.title}</Typography>
                        <Typography>{note.content}</Typography>
                        <Stack direction="row" spacing={1}>
                            {note.tags.map((tag) =>
                                <Chip key={tag.id} label={tag.tagName}/>
                            )}
                        </Stack>
                        <Button href={`note/${note.noteId}`}>View</Button>
                        <Button onClick={() => {
                            deleteNoteRequest(note.noteId, setNotes);
                        }}>Delete</Button>
                    </Paper>
                );
            })}
        </div>
    )
}