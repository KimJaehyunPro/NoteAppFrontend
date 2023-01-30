import { useNavigate } from "react-router-dom";
import { CREATE_NOTE_API_URL } from "../Constants/endpoints";

export default function useCreateNote() {

    const navigate = useNavigate();
    
    return (title, content, tagNames) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${CREATE_NOTE_API_URL}`, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(
                {
                    "title": title,
                    "content": content,
                    "tagNames": tagNames
                }
            )
        })
        .then(response => response.json())
        .then(() => {
            navigate("../note");
        })
    };
}