import { Paper } from "@mui/material";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ReadNote(props) {

    const [noteTitle, setNoteTitle] = React.useState("Default noteTitle");
    const [noteContent, setNoteContent] = React.useState("Default noteContent");

    return (
        <Paper elevation={3}
            sx={{
                flexGrow: 1,
                maxWidth: 752
            }}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    {noteTitle}
                </Typography>
                <Typography>
                    {noteContent}
                </Typography>
            </Grid>
        </Paper>
    )
}