import { UPDATE_LAST_OPEN_TIMESTAMP_API_URL } from "../../Constants/endpoints";

export default function updateLastOpenTimestamp(noteId) {

    const tokenType = sessionStorage.getItem("tokenType");
    const token = sessionStorage.getItem("accessToken");

    const abortController = new AbortController();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${UPDATE_LAST_OPEN_TIMESTAMP_API_URL}/${noteId}`, {
        signal: abortController.signal,
        method: 'PUT',
        headers: {
            'Authorization': `${tokenType}${token}`
        }
    })
        .then(response => response)
        .catch(error => {
            if (abortController.signal.aborted) return;
            console.log(`Unexpected error: ${error}`);
        })
}