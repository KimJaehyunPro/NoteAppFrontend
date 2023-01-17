import { READ_ALL_NOTES_API_URL } from "../../../Constants/endpoints";

export default async function fetchAllNotes(setNotes) {

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/${READ_ALL_NOTES_API_URL}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setNotes(data);
    });
}