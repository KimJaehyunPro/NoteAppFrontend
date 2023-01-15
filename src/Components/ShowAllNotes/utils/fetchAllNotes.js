export default async function fetchAllNotes(setNotes) {

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/note/all`)
    .then(response => response.json())
    .then(data => {
        setNotes(data);
        return;
    });
}