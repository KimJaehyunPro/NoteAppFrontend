import { NOTE_URL, NOTE_API_URL } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";

export default function useUpdateNote(noteId, title, content, tags) {

    const navigate = useNavigate();

    const tokenType = sessionStorage.getItem("tokenType");
    const token = sessionStorage.getItem("accessToken");

    return (noteId, title, content, tags) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/${noteId}`, {
            method: 'PUT',
            headers: { 
                "Content-type": "application/json",
                "Authorization": `${tokenType}${token}`
            },
            body: JSON.stringify(
                {
                    "noteId": noteId,
                    "title": title,
                    "content": content,
                    "tags": tags
                }
            )
        })
            .then(response => response.json())
            .then(
                navigate(`../${NOTE_URL}`)
            )
    }
}