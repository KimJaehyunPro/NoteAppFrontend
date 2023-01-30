import {Box, Button} from '@mui/material/';
import TextField from '@mui/material/TextField';
import * as React from 'react';

function parseTags(tags) {
    return tags.split(' ').filter(tag => tag[0] === '#').map(tag => tag.slice(1));
}

export default function WriteNote(props) {

    const {defaultTitle, defaultContent, defaultTags, operation, buttonLabel} = props;

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [tagNames, setTagNames] = React.useState(''); 

    React.useEffect(() => {
        setTitle(defaultTitle);
        setContent(defaultContent);
    }, [defaultTitle, defaultContent])

    // Cleanse tags to a String 
    // (ex: [{id: 0, tagName: "foo"}, {id: 1, tagName: "bar"}}] -> "#foo #bar")
    React.useEffect(() => {
        const originalTagNamesList = [];

        defaultTags.forEach((tag) => {
            originalTagNamesList.push(tag.tagName);
        })
        // originalTagNamesList = ["foo","bar"]

        const hashtaggedTagNamesList =  originalTagNamesList.map(tagName => {
            return "#" + tagName
        })
        //hashtaggedTagNamesList = ["#foo", "#bar"]

        const cleansedTagNamesString = hashtaggedTagNamesList.join(' ');
        console.log(cleansedTagNamesString);
        //cleansedTagNamesString = "#foo #bar"

        setTagNames(cleansedTagNamesString)
    }, [defaultTags])
    
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
                handleSubmit(title, content, tagNames)
            }} variant="contained">{buttonLabel}</Button>
        </Box>
    );
}