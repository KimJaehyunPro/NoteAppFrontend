import { UPDATE_NOTE_API_URL } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";

export default function useUpdateNote(title, content, tags) {

    const navigate = useNavigate();

    //Find the note that has the same title
    //await fetch(`${process.env.REACT_APP_BACKEND_URL}`/${})

    return (title, content, tags) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${UPDATE_NOTE_API_URL}`, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(
                {
                    "noteId": 152,
                    "title": title,
                    "content": content,
                    "tags": tags
                }
            )
        })
            .then(response => response.json())
            .then(
                navigate("../note")
            )
    }

    return "foo";
}