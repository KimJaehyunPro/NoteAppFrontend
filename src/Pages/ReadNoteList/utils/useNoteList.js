import { useState, useEffect } from 'react';
import { NOTE_API_URL } from "../../../Constants/endpoints";
import { GET_NOTE_LIST_PAGE_SIZE, GET_NOTE_LIST_SORT } from '../../../Constants/constants';

export default function useNoteList(fetchMethod, query, page) {
    const [noteList, setNoteList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setNoteList([]);
    }, [query])

    useEffect(() => {
        setIsLoading(true);
    
        const url = `${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/search${fetchMethod ? `/${fetchMethod}` : ''}?${query ? `query=${query}&` : ''}page=${page}&size=${GET_NOTE_LIST_PAGE_SIZE}&sort=${GET_NOTE_LIST_SORT}`
        const abortController = new AbortController();

        fetch(url, 
          {
            signal: abortController.signal,
          })
            .then(response => response.json())
            .then(data => {
                setNoteList(prevNoteList => {
                    if (!data.content) return
                    return [...prevNoteList, ...data.content];
                });
                setHasMore(data.totalPages > page);
                setIsLoading(false);
            }).catch((error) => {
                if (abortController.signal.aborted) return;
                console.log(`Unexpected error: ${error}`)
            })

            return () => {
                abortController.abort();
            };
    }, [fetchMethod, query, page])
 
    

    return {noteList, isLoading, hasMore}
}