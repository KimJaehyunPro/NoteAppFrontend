import { useNavigate } from "react-router-dom";
import { GET_RANDOM_NOTE_ID_API_RUL } from "../Constants/endpoints";

export default function useRandomNote() {

    const navigate = useNavigate();
    
    return () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
        .then(response => response.json())
        .then((data) => {
            navigate(`../notes/${data.noteId}`);
        })
    };
}