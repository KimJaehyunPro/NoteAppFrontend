import * as React from 'react';

import { NOTE_API_URL } from '../Constants/endpoints';

export default function useNote(noteId) {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [tags, setTags] = React.useState([]);
    const [creationTimestamp, setCreationTimestamp] = React.useState();
    const [lastOpenTimestamp, setLastOpenTimestamp] = React.useState();

    const [isLoading, setIsLoading] = React.useState(true);

    const tokenType = sessionStorage.getItem("tokenType");
    const accessToken = sessionStorage.getItem("accessToken");

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${noteId}`, {
            headers: {
                'Authorization': `${tokenType}${accessToken}`
            }
        })
            .then(response => response.json())
            .then(noteData => {
                setTitle(noteData.title);
                setContent(noteData.content);
                setTags(noteData.tags);
                setCreationTimestamp(noteData.creationTimestamp);
                setLastOpenTimestamp(noteData.lastOpenTimestamp);
                setIsLoading(false);
            })
    }, [noteId]);

    return { title, content, tags, creationTimestamp, lastOpenTimestamp, isLoading };
}