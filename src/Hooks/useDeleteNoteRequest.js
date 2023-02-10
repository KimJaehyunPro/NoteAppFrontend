import { useNavigate } from "react-router-dom";
import { NOTE_API_URL } from "../Constants/endpoints";

export default function useDeleteNoteRequest() {

    const navigate = useNavigate();

    return ((noteId) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "noteId": noteId
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.noteId) {
                    navigate("../note");
                } else {
                    alert("I am broke like you");
                }
            })
    })
}