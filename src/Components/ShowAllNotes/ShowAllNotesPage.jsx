import Notes from "./Notes";
import fetchAllNotes from "./utils/fetchAllNotes";
import * as React from 'react';

export default function ShowAllNotesPage(props) {
    
    const [notes, setNotes] = React.useState();

    React.useEffect(() => {
        fetchAllNotes(setNotes);
      }, []);

    return (
        <div>
            {notes ? <Notes notes={notes} /> : <p>There is no note.</p>}
        </div>
    )
}