import { Paper, Typography } from "@mui/material";

export default function Notes(props) {

    const notes = props.notes;

    return (
        <div>
            {notes.map((note) => {
                return (
                    <Paper elevation={2} key={note.id} style={{"margin": "10px"}}>
                        <Typography>{note.id}</Typography>
                        <Typography>{note.title}</Typography>
                        <Typography>{note.content}</Typography>
                    </Paper>
                );
            })}
        </div>
    )
}