import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useRandomNote from "../../Hooks/useRandomNote";
import { GET_RANDOM_NOTE_ID_API_RUL } from '../../Constants/endpoints';

export default function RandomNote(props) {
    
    const navigate = useNavigate();
    const [noteId, setNoteId] = React.useState('');

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
            .then(response => response.json())
            .then(data => {
                setNoteId(data.noteId);
                return navigate(`../../notes/${data.noteId}`);
            })
    }, [noteId])
}