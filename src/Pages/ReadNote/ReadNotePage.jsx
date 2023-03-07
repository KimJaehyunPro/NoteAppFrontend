import { Paper, Typography, Button, Stack, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from 'react';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import useNote from "../../Hooks/useNote";
import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";

import { UPDATE_NOTE_URL } from "../../Constants/endpoints";

import TagSection from "../ReadNoteList/TagSection";
import dateHandler from "../utils/dateHandler";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

export default function ReadNotePage(props) {
    const { noteId } = useParams();
    const { title, content, tags, creationTimestamp, lastOpenTimestamp } = useNote(noteId);

    const deleteNoteRequest = useDeleteNoteRequest();

    const buttonStyle = {
        "borderRadius": "20px"
    }

    return (
        <Paper elevation={3} sx={{ border: 1, padding: 4, borderColor: "black" }}>
            <Stack spacing={3}>
                <Typography variant="h3">{title}</Typography>

                <Stack spacing={3}>
                    <ReactMarkdown
                        children={content}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                const wrapLines = true;
                                const lineProps = {
                                    style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
                                };
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        language={match[1]}
                                        wrapLines={wrapLines}
                                        lineProps={lineProps}
                                        {...props}
                                    />
                                ) : (
                                    <SyntaxHighlighter
                                        children={children}
                                        wrapLines={wrapLines}
                                        lineProps={lineProps}
                                        {...props}
                                    />
                                )
                            }
                        }}
                    />

                    <TagSection tags={tags} />

                    <Grid container direction="column" alignContent="flex-end">
                        <Typography>Created: {dateHandler(creationTimestamp)}</Typography>
                        <Typography>Opened: {dateHandler(lastOpenTimestamp)}</Typography>   
                    </Grid>

                    <Stack direction="row" justifyContent="flex-end" spacing={1}>
                        <Button style={buttonStyle} color="secondary" variant="outlined" href={`../${UPDATE_NOTE_URL}/${noteId}`} startIcon={<BorderColorRoundedIcon />}>Edit</Button>
                        <Button style={buttonStyle} color="error" variant="outlined" startIcon={<DeleteRoundedIcon />} onClick={() => {
                            deleteNoteRequest(noteId);
                        }}>Delete</Button>
                    </Stack>

                </Stack>
            </Stack>
        </Paper>
    )
}