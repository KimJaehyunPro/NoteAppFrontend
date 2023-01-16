import deleteNoteRequest from "./utils/deleteNoteRequest";

import { Button, Paper, Typography } from "@mui/material";

export default function Notes(props) {

    const { notes, setNotes} = props;

    return (
        <div>
            {notes.map((note) => {
                return (
                    <Paper elevation={2} key={note.id} style={{"margin": "10px"}}>
                        <Typography>{note.id}</Typography>
                        <Typography>{note.title}</Typography>
                        <Typography>{note.content}</Typography>
                        <Button href={`notes/${note.id}`}>View</Button>
                        <Button onClick={() => {
                            deleteNoteRequest(note.id, setNotes);
                        }}>Delete</Button>
                    </Paper>
                );
            })}
        </div>
    )
}