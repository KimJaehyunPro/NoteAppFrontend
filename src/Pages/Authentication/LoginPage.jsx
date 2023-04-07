import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import getJWSToken from "../utils/getJWSToken";

export default function LoginPage(props) {

    const [JWSToken, setJWSToken] = useState(null);

    useEffect(() => {
        const fetchToken = () => {
            const token = getJWSToken('foo', 'bar');
            setJWSToken(token);
        };
        fetchToken();
    }, []);

    return (
        <div>Login page</div>
    )
}