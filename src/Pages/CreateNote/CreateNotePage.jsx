import useCreateNote from '../../Hooks/useCreateNote';
import WriteNote from "../../Components/NoteForm";

import * as React from 'react';

export default function CreateNotePage(props) {

    const createNote = useCreateNote();

    return (
            <WriteNote operation={createNote} buttonLabel="Create" />
    )
}