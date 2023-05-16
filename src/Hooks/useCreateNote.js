import { useNavigate } from "react-router-dom";
import { NOTE_API_URL } from "../Constants/endpoints";

export default function useCreateNote() {

    const navigate = useNavigate();

    const tokenType = sessionStorage.getItem("tokenType");
    const accessToken = sessionStorage.getItem("accessToken");
    
    return (noteId, title, content, tags) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${NOTE_API_URL}/`, {
            method: 'POST',
            headers: { 
                "Content-type": "application/json",
                "Authorization": `${tokenType}${accessToken}`
            },
            body: JSON.stringify(
                {
                    "title": title,
                    "content": content,
                    "tags": tags
                }
            )
        })
        .then(response => response.json())
        .then(() => {
            navigate("../notes");
        })
    };
}