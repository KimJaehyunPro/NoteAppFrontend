import { useEffect, useState } from "react";
import { TAG_API_URL } from "../Constants/endpoints";

export default function useTagList(query) {

    const url = `${process.env.REACT_APP_BACKEND_URL}/${TAG_API_URL}/`

    const tokenType = localStorage.getItem("tokenType");
    const JWSToken = localStorage.getItem("accessToken");    

    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        fetch(url, {
            headers: {
                'Authorization': `${tokenType} ${JWSToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setTagList(() => {
                    if (!data.content) return;
                    return [...data.content];
                });
                return data.content;
            })
    }, [query, url])

    return { tagList };
}