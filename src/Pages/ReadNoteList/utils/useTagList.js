import { useEffect, useState } from "react";
import { TAG_API_URL } from "../../../Constants/endpoints";

export default function useTagList(query) {

    const url = `${process.env.REACT_APP_BACKEND_URL}/${TAG_API_URL}/`

    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTagList(() => {
                    if (!data.content) return;
                    return [...data.content];
                });
                return data.content;
            })
    }, [query])

    return { tagList };
}