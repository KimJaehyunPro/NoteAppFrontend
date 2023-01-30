import {Box, Button} from '@mui/material/';
import TextField from '@mui/material/TextField';
import * as React from 'react';

function parseTags(tags) {
    return tags.split(' ').filter(tag => tag[0] === '#').map(tag => tag.slice(1));
}

export default function WriteNote(props) {

    const {defaultTitle, defaultContent, defaultTagNames, operation, buttonLabel} = props;

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [tagNames, setTagNames] = React.useState(''); 
    
    function handleSubmit(title, content, tags) {
        const parsedTags = parseTags(tags);
        operation(title, content, parsedTags);
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '100%'},
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                id='note-title'
                label="Title"
                multiline
                defaultValue={defaultTitle}
                onChange={e => {
                    setTitle(e.target.value)
                }}
            />

            <TextField
                id='note-content'
                label="Content"
                multiline
                rows={20}
                defaultValue={defaultContent}
                onChange={e => {
                    setContent(e.target.value)
                }}
            />

            <TextField
                label="Tags"
                placeholder='#Tag1 #Tag2'
                size="small"
                defaultValue={defaultTagNames}
                onChange={e => {
                    setTagNames(e.target.value)
                }}
            />

            <Button onClick={() => {
                handleSubmit(title, content, tagNames)
            }} variant="contained">{buttonLabel}</Button>
        </Box>
    );
}