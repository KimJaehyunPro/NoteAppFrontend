import { useState, useEffect } from 'react';
import { NOTE_API_URL } from "../../../Constants/endpoints";
import { GET_NOTE_LIST_PAGE_SIZE, GET_NOTE_LIST_SORT } from '../../../Constants/constants';

export default function useNoteList(fetchMethod, query) {
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${fetchMethod ? `search/${fetchMethod}` : ''}?${query ? `query=${query}&` : ''}page=${0}&size=${GET_NOTE_LIST_PAGE_SIZE}&sort=${GET_NOTE_LIST_SORT}`)
            .then(response => response.json())
            .then(data => {
                setNoteList(data.content);
            });
    }, [])

    return [noteList, setNoteList];
}