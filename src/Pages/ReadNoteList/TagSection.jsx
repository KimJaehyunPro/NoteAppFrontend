import { Stack, Chip } from "@mui/material";

export default function TagSection(props) {
    const { tags, onTagClick } = props;

    const style = {
        "marginTop": 2,
        "width": "fit-content"
    };

    return (
        <Stack direction="row" spacing={1} sx={style}
            onMouseDown={event => event.stopPropagation()}
            onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
            }}
        >
            {tags.map((tag) =>
                <Chip key={tag.id} size="small" label={tag.name} onClick={() => {
                    onTagClick?.(tag.name);
                }} />
            )}
        </Stack>
    )
}