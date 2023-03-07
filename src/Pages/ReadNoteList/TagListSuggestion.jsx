import { Grid, Chip } from "@mui/material";

export default function TagListSuggestion(props) {

    const { tagList, onTagClick } = props;

    return (
        <div>
            {tagList.map((tag) => {

                return (
                    <Chip key={tag.id} size="small" label={tag.name} sx={{marginLeft: 2}} onClick={() => {
                        onTagClick?.(tag.name);
                    }} />
                );

            })}
        </div>
    );
};