import { useState, useEffect } from 'react';
import { NOTE_API_URL } from "../../../Constants/endpoints";

export default function useNoteList(noteListSize, sortCriteria) {
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/?page=0&size=${noteListSize}&sort=${sortCriteria}`)
            .then(response => response.json())
            .then(data => {
                setNoteList(data.content);
            });
    }, [])

    return [noteList, setNoteList];
}