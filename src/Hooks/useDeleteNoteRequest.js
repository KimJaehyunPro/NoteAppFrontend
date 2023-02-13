import { useNavigate } from "react-router-dom";
import { NOTE_URL, NOTE_API_URL } from "../Constants/endpoints";

export default function useDeleteNoteRequest() {

    const navigate = useNavigate();

    return ((noteId, onSuccess) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${noteId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.status === 200) {
                    navigate(`../${NOTE_URL}`);
                    onSuccess();
                }
            })
    })
}