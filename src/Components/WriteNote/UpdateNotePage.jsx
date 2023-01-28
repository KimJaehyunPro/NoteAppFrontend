import useUpdateNote from "../../Hooks/useUpdateNote";
import WriteNote from "./WriteNote"

export default function UpdateNotePage(props) {

    const {defaultTitle, defaultContent, defaultTagNames} = props;
    const updateNote = useUpdateNote();
    return(
        <WriteNote defaultTitle={defaultTitle} defaultContent={defaultContent} defaultTagNames={defaultTagNames} operation={updateNote}/>
    )
}