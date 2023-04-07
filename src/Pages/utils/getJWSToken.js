import { LOGIN_API_URL } from '../../Constants/endpoints';
import axios from 'axios';

export default function getJWSToken(
    username,
    password
) {
    username = "testUser1";
    password = "123";
    
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/${LOGIN_API_URL}`, {
            username,
            password
        })
        .then(response => {
            
            if (response.data.accessToken) {
                localStorage.setItem("token", JSON.stringify(response.data));
                return localStorage.getItem('token');
            }

            return response.data;
        });
}