import parseTags from './utils/parseTags';
import tagsToHashtaggedString from './utils/tagsToHashtaggedString';

import { Box, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function WriteNote(props) {

    const { noteId, defaultTitle, defaultContent, defaultTags, operation, buttonLabel } = props;

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [tagNames, setTagNames] = React.useState('');

    React.useEffect(() => {
        setTitle(defaultTitle);
        setContent(defaultContent);
    }, [defaultTitle, defaultContent])

    // Cleanse tags to a String (ex: [*tag1, *tag2] -> "#tag1 #tag2")
    React.useEffect(() => {
        setTagNames(tagsToHashtaggedString(defaultTags));
    }, [defaultTags])

    function handleSubmit(noteId, title, content, tags) {
        const parsedTags = parseTags(tags);
        operation(noteId, title, content, parsedTags);
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                id='note-title'
                label="Title"
                multiline
                value={title}
                onChange={e => {
                    setTitle(e.target.value)
                }}
            />

            <TextField
                id='note-content'
                label="Content"
                multiline
                rows={20}
                value={content}
                onChange={e => {
                    setContent(e.target.value)
                }}
            />

            <TextField
                label="Tags"
                placeholder='#Tag1 #Tag2'
                size="small"
                value={tagNames}
                onChange={e => {
                    setTagNames(e.target.value)
                }}
            />

            <Button onClick={() => {
                handleSubmit(noteId, title, content, tagNames);
            }} variant="contained">{buttonLabel}</Button>
        </Box>
    );
}