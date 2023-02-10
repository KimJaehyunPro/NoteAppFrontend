import parseTags from '../../Utils/parseTags';

import { Box, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import * as React from 'react';

function tagNamesToTagObjects(tagNames) {
    return tagNames.map((tagName) => {return { name: tagName }});
}

export default function NoteForm(props) {

    const { noteId, defaultTitle, defaultContent, defaultTags, operation, buttonLabel } = props;

    const [title, setTitle] = React.useState(defaultTitle);
    const [content, setContent] = React.useState(defaultContent);
    const [tagNames, setTagNames] = React.useState(
        defaultTags ? defaultTags.map((tag) => `#${tag.tagName}`).join(' ') : []
    );

    function handleSubmit(noteId, title, content, tagNames) {
        const tags = tagNamesToTagObjects(parseTags(tagNames));
        operation(noteId, title, content, tags);
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