import { GET_RANDOM_NOTE_ID_API_RUL } from '../Constants/endpoints';

export default function useRandomNote() {

    return () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            })
    }

}