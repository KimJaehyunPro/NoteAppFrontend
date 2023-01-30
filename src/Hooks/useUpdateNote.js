import { UPDATE_NOTE_API_URL } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";

export default function useUpdateNote(noteId, title, content, tags) {

    const navigate = useNavigate();

    return (noteId, title, content, tags) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${UPDATE_NOTE_API_URL}`, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(
                {
                    "noteId": noteId,
                    "title": title,
                    "content": content,
                    "tagNames": tags
                }
            )
        })
            .then(response => response.json())
            .then(
                navigate("../note")
            )
    }
}