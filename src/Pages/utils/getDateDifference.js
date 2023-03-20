import updateLastOpenTimestamp from "./updateLastOpenTimestamp";

export default function getDateDifference(lastOpenedDate, noteId) {

    const lastOpenedDateObject = new Date(lastOpenedDate);
    const currentDateObject = new Date();

    //const dateDifference = currentDateObject.getDate() - lastOpenedDateObject.getDate(0);
    const dateDifference = currentDateObject.getDay() - lastOpenedDateObject.getDay();
    console.log(`??? dateDifference: ${dateDifference}`);

    updateLastOpenTimestamp(noteId);

    return dateDifference;
}