import { useState, useEffect } from 'react';
import { NOTE_API_URL } from "../../../Constants/endpoints";

export default function useNoteList(fetchMethod, query) {
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${fetchMethod ? fetchMethod : ''}?${query ? `query=${query}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setNoteList(data.content);
            });
    }, [])

    return [noteList, setNoteList];
}