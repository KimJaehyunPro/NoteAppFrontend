import { GET_RANDOM_ID_API_URL } from "../Constants/endpoints";

export default function useRandomId() {
    return () => {
        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_ID_API_URL}`)
            .then(response => response.json())
            .then((randomId) => {
                return randomId;
            })
    }
}