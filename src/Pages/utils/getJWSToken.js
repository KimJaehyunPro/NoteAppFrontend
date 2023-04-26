import { LOGIN_API_URL } from '../../Constants/endpoints';
import axios from 'axios';

export default function getJWSToken(username, password) {
    return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/${LOGIN_API_URL}`, {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                sessionStorage.setItem("accessToken", response.data.accessToken);
                sessionStorage.setItem("tokenType", response.data.tokenType);

                return { accessToken: sessionStorage.getItem("accessToken"), tokenType: sessionStorage.getItem("tokenType") };
            }
        });
}