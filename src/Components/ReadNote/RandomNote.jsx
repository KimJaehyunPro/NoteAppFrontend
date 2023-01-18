import { useNavigate } from "react-router-dom";
import useRandomNote from "../../Hooks/useRandomNote";

export default function RandomNote(props) {
    const navigate = useNavigate();
    const randomNote = useRandomNote();

    return navigate(`/notes/${randomNote()}`);
}