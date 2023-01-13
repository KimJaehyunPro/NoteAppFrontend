import fetchAllNotes from "./utils/fetchAllNotes";

export default function ShowAllNotesPage(props) {

    fetchAllNotes();

    return(
        <div>ShowAllNotesPage</div>
    )
}