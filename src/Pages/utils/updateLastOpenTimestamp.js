import { UPDATE_LAST_OPEN_TIMESTAMP_API_URL } from "../../Constants/endpoints";

export default function updateLastOpenTimestamp(noteId) {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${UPDATE_LAST_OPEN_TIMESTAMP_API_URL}/${noteId}`, {
        method: 'PUT'
    })
        .then(response => response)   
}