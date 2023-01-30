import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useRandomNoteId from '../../Hooks/useRandomNoteId';

export default function ReadRandomNotePage() {

    const [noteId, setNoteId] = React.useState();
    const navigate = useNavigate();

    useRandomNoteId().then((noteIdData) => {
        setNoteId(noteIdData);
    })
    
    React.useEffect(() => {
        if (noteId) {
            navigate(`../note/${noteId}`);
        }
    }, [noteId, navigate])

    return <div></div>
}
