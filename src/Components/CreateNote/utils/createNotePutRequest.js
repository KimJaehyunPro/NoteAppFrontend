export default function createNotePutRequest(title, content) {
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    fetch(`${process.env.REACT_APP_BACKEND_URL}/note/add`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData)
    }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    //noteId, title, content
    return;
}