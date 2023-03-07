export default function dateHandler(localDateTime) {
    const dateObj = new Date(localDateTime);
    const formattedDate = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) + ", " + dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    return formattedDate;
}