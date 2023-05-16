import useCreateNote from '../../Hooks/useCreateNote';
import WriteNote from "../../Components/NoteForm/NoteForm";

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../Constants/endpoints';

export default function CreateNotePage(props) {

    const navigate = useNavigate();

    const tokenType = sessionStorage.getItem("tokenType");
    const isLoggedIn = (tokenType != null);
    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate(`../${LOGIN_URL}`);
        }
    }, [navigate, isLoggedIn])

    const createNote = useCreateNote();

    return (
        <WriteNote operation={createNote} buttonLabel="Create" />
    )
}