import { DELETE_NOTE_API_URL } from "../../../Constants/endpoints";

export default function deleteNoteRequest(noteId, setNoteList) {

    fetch(`${process.env.REACT_APP_BACKEND_URL}/${DELETE_NOTE_API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "noteId": noteId
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.noteId) {
                setNoteList(noteList => {
                    const newNoteList = noteList.filter(note => {
                        return note.noteId !== noteId;
                    })
                    return newNoteList;
                })
            } else {
                alert("I am broke like you");
            }
        })

    return noteId;
}