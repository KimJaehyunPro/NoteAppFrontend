import { Paper } from "@mui/material";

import * as React from 'react';
import { useParams } from "react-router-dom";

import fetchNote from "./utils/fetchNote";

export default function ReadNotePage(props) {

    const { noteId } = useParams();
    const [noteTitle, setNoteTitle] = React.useState("Default noteTitle");
    const [noteContent, setNoteContent] = React.useState("Default noteContent");

    React.useEffect(() => {
        fetchNote(noteId, setNoteTitle, setNoteContent);
    }, []);
    
    return (
        <Paper elevation={3}>
            <p>{ noteId }</p>
            <p>{ noteTitle }</p>
            <p>{ noteContent }</p>
        </Paper>
    )
}