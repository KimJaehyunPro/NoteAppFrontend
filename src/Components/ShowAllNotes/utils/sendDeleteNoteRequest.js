import { DELETE_NOTE_API_URL } from "../../../Constants/endpoints";

export default function sendDeleteNoteRequest(noteId) {
    
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${DELETE_NOTE_API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "noteId" : noteId
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    return noteId;
}