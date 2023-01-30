export default function tagsToHashtaggedString(tags) {

    //tags = [{"id": 0, "tagName": "foo"}, {"id": 1, "tagName": "bar"}]

    const originalTagNamesList = [];

    tags.forEach((tag) => {
        originalTagNamesList.push(tag.tagName);
    })
    // originalTagNamesList = ["foo","bar"]

    const hashtaggedTagNamesList = originalTagNamesList.map(tagName => {
        return "#" + tagName
    })
    //hashtaggedTagNamesList = ["#foo", "#bar"]

    const hashtaggedString = hashtaggedTagNamesList.join(' ');
    //hashtaggedString = "#foo #bar"

    return hashtaggedString;
}