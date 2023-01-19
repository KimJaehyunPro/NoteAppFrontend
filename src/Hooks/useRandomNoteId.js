import { GET_RANDOM_NOTE_ID_API_RUL } from "../Constants/endpoints";

export default async function useRandomNoteId() {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
        .then(response => response.json())
        .then((data) => {
            return data.noteId;
    })
}