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
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("tokenType", response.data.tokenType);

                return { accessToken: localStorage.getItem("accessToken"), tokenType: localStorage.getItem("tokenType") };
            }
        });
}