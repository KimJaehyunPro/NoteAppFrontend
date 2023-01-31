import Notes from './Notes';
import useNoteList from './utils/useNoteList';
import * as React from 'react';

export default function ReadNoteListPage(props) {

    const [noteList, setNoteList] = useNoteList();

    return (
        <div>
            {noteList.length > 0 ? <Notes noteList={noteList} setNoteList={setNoteList} /> : <p>There is no note.</p>}
        </div>
    )
}