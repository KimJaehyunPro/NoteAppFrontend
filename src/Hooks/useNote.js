import * as React from 'react';

import { NOTE_API_URL } from '../Constants/endpoints';

export default function useNote(noteId) {
    const [noteTitle, setNoteTitle] = React.useState("");
    const [noteContent, setNoteContent] = React.useState("");
    const [noteTags, setNoteTags] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${noteId}`)
            .then(response => response.json())
            .then(noteData => {
                setNoteTitle(noteData.title);
                setNoteContent(noteData.content);
                setNoteTags(noteData.tags);
                setIsLoading(false);
            })
    }, [noteId]);

    return [noteTitle, noteContent, noteTags, isLoading];
}