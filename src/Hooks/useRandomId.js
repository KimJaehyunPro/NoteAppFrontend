import { GET_RANDOM_ID_API_URL } from "../Constants/endpoints";

export default function useRandomId() {

    const tokenType = sessionStorage.getItem("tokenType");
    const token = sessionStorage.getItem("accessToken");

    return () => {
        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_ID_API_URL}`, {
            headers: {
                'Authorization': `${tokenType}${token}`
            }
        })
            .then(response => response.json())
            .then((randomId) => {
                return randomId;
            })
    }
}