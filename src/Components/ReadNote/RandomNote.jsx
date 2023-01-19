import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_RANDOM_NOTE_ID_API_RUL } from '../../Constants/endpoints';
import useRandomNoteId from '../../Hooks/useRandomNoteId';

export default function RandomNote() {

    const [noteId, setNoteId] = React.useState();
    const navigate = useNavigate();

    useRandomNoteId().then((noteIdData) => {
        setNoteId(noteIdData);
    })
    
    React.useEffect(() => {
        if (noteId) {
            navigate(`../notes/${noteId}`);
        }
    }, [noteId, navigate])

    return <div></div>
}
