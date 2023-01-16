import { READ_NOTE_API_URL } from "../../../Constants/endpoints";

export default async function fetchNote(noteId, setNoteTitle, setNoteContent) {

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/${READ_NOTE_API_URL}/${noteId}`)
        .then(response => response.json())
        .then(noteData => {
            setNoteTitle(noteData.title);
            setNoteContent(noteData.content);
        })
    return;
}