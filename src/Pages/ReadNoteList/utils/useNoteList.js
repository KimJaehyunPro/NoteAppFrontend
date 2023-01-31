import { useState, useEffect } from 'react';
import { READ_ALL_NOTES_API_URL } from "../../../Constants/endpoints";

export default function useNoteList() {
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${READ_ALL_NOTES_API_URL}`)
            .then(response => response.json())
            .then(data => {
                setNoteList(data);
            });
    }, [])

    return [noteList, setNoteList];
}