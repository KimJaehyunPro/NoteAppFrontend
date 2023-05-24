export default function dateHandler(localDateTimeObject) {
    const dateObject = new Date(localDateTimeObject);
    //const formattedDate = dateObject.toLocaleDateString('en-GB', { hour: '2-digit', minute: '2-digit' }) + ", " + dateObject.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const formattedDate = dateObject.toLocaleDateString('en-GB', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short', year: 'numeric' });
    return formattedDate;
}