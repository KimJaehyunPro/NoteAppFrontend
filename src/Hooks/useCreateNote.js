import { CREATE_NOTE_API_URL } from "../Constants/endpoints";

export default function useCreateNote() {
    
    return (title, content) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${CREATE_NOTE_API_URL}`, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(
                {
                    "title": title,
                    "content": content
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    };
}