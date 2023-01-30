import { UPDATE_NOTE_API_URL } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";

import { GET_NOTE_BY_TITLE_URL } from "../Constants/endpoints";

export default function useUpdateNote(title, content, tags) {

    const navigate = useNavigate();

    return (title, content, tags) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_NOTE_BY_TITLE_URL}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(
                {
                    'title': title
                }
            )
        })
            .then(response => response.json())
            .then((data) => {
                const noteId = data.noteId;
                fetch(`${process.env.REACT_APP_BACKEND_URL}/${UPDATE_NOTE_API_URL}`, {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
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
                        navigate("../note")
                    )
            })

    }
}