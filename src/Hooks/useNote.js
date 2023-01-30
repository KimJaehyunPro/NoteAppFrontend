import * as React from 'react';

import { READ_NOTE_API_URL } from '../Constants/endpoints';

export default function useNote(noteId) {
    const [noteTitle, setNoteTitle] = React.useState("Loading noteTitle...");
    const [noteContent, setNoteContent] = React.useState("Loading Content...");
    const [noteTags, setNoteTags] = React.useState([]);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${READ_NOTE_API_URL}/${noteId}`)
            .then(response => response.json())
            .then(noteData => {
                setNoteTitle(noteData.title);
                setNoteContent(noteData.content);
                setNoteTags(noteData.tags);
            })
    }, [noteId]);

    return [noteId, noteTitle, noteContent, noteTags];
}