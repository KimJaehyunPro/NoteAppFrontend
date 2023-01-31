import { useParams } from "react-router-dom";
import useNote from "../../Hooks/useNote";
import useUpdateNote from "../../Hooks/useUpdateNote";
import WriteNote from "../../Components/NoteForm/NoteForm";

import * as React from 'react';

export default function UpdateNotePage(props) {
    
    const { noteId } = useParams();
    const [title, content, tags, isLoadingNote] = useNote(noteId);

    const updateNote = useUpdateNote();

    return (
        isLoadingNote ?
            <div>loading...</div> :
            <WriteNote
                noteId={noteId}
                defaultTitle={title}
                defaultContent={content}
                defaultTags={tags}
                operation={updateNote}
                buttonLabel="Update" />
    )
}