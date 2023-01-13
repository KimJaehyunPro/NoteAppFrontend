import { Paper } from "@mui/material";

import * as React from 'react';

export default function ReadNotePage(props) {

    const [noteTitle, setNoteTitle] = React.useState("Default noteTitle");
    const [noteContent, setNoteContent] = React.useState("Default noteContent");

    return (
        <Paper elevation={3}>
            <p>{noteTitle}</p>
            <p>{noteContent}</p>
        </Paper>
    )
}