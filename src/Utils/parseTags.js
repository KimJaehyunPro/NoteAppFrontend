// '#tag1 #tag2' => ['tag1', 'tag2']
export default function parseTags(tags) {
    return tags.split(' ').filter(tag => tag[0] === '#').map(tag => tag.slice(1));
}