export default async function fetchNote(noteId, setNoteTitle, setNoteContent) {

    console.log(noteId);

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/note/${noteId}`)
        .then(response => response.json())
        .then(noteData => {
            setNoteTitle(noteData.title);
            setNoteContent(noteData.content);
        })
    return;
}