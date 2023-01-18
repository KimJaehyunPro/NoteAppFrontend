import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_RANDOM_NOTE_ID_API_RUL } from '../../Constants/endpoints';

export default function RandomNote(props) {
    
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
            .then(response => response.json())
            .then(data => {
                return navigate(`../../notes/${data.noteId}`);
            })
    })
}