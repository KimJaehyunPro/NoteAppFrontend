import { useParams } from "react-router-dom";
import useNote from "../../Hooks/useNote";
import useUpdateNote from "../../Hooks/useUpdateNote";
import WriteNote from "./WriteNote";

export default function UpdateNotePage(props) {

    const { noteId }  = useParams();
    const [defaultNoteId, defaultTitle, defaultContent, defaultTagNames] = useNote(noteId);

    const updateNote = useUpdateNote();

    //returns a note object(id, title, content, tags)
    
    return(
        <WriteNote 
        defaultTitle={defaultTitle} 
        defaultContent={defaultContent} 
        defaultTagNames={defaultTagNames} 
        operation={updateNote}
        buttonLabel="Update"/>
    )
}