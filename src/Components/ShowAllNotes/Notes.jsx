import deleteNoteRequest from "./utils/deleteNoteRequest";

import { Button, Paper, Typography } from "@mui/material";

export default function Notes(props) {

    const { notes, setNotes } = props;

    return (
        <div>
            {notes.map((note) => {
                return (
                    <Paper elevation={2} key={note.noteId} style={{"margin": "10px"}}>
                        <Typography>{note.noteId}</Typography>
                        <Typography>{note.title}</Typography>
                        <Typography>{note.content}</Typography>
                        <Button href={`notes/${note.noteId}`}>View</Button>
                        <Button onClick={() => {
                            deleteNoteRequest(note.noteId, setNotes);
                        }}>Delete</Button>
                    </Paper>
                );
            })}
        </div>
    )
}