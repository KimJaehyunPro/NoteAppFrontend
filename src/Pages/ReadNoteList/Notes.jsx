import useDeleteNoteRequest from "../../Hooks/useDeleteNoteRequest";
import { UPDATE_NOTE_URL } from "../../Constants/endpoints";

import { Chip, Stack, Typography, Card, CardActionArea, CardHeader, CardContent, IconButton } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import { useNavigate } from "react-router-dom";
import { NOTE_URL } from "../../Constants/endpoints";
import { FETCH_METHOD_SEARCH_TAG } from "../../Constants/constants";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const NoteBodySection = (props) => {
    const { content } = props
    const maxContentCharacterLength = 100;
    return (
        <Typography>{
            ((content.length > maxContentCharacterLength) ?
                `${content.slice(0, maxContentCharacterLength)} ...` : content)}
        </Typography>
    )
}

const TagSection = (props) => {
    const { tags } = props;

    const navigate = useNavigate();

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
                    navigate(`/${NOTE_URL}?fetchMethod=${FETCH_METHOD_SEARCH_TAG}&query=${tag.name}`);
                    navigate(0);
                }} />
            )}
        </Stack>
    )
}

const ActionButtonSection = (props) => {
    const { noteList, setNoteList, noteId } = props;
    const deleteNoteRequest = useDeleteNoteRequest();
    const navigate = useNavigate();

    return (
        <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ marginLeft: "auto" }}
            onMouseDown={event => event.stopPropagation()}
            onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
            }}>
            <IconButton onClick={() => {
                navigate(`/${UPDATE_NOTE_URL}/${noteId}`);
            }}>
                <BorderColorRoundedIcon />
            </IconButton>
            <IconButton onClick={() => {
                deleteNoteRequest(noteId, () => {
                    const noteListWithoutDeletedNote = noteList.filter(n => n.id !== noteId);
                    setNoteList(noteListWithoutDeletedNote)
                });
            }}>
                <DeleteRoundedIcon />
            </IconButton>
        </Stack>
    )
}

export default function Notes(props) {
    const { noteList, setNoteList } = props;
    return (
        <Stack spacing={3}>

            <Grid2 container spacing={1}>
                {noteList.map((note) => {
                    return (
                        <Grid2 sm={12} lg={6} xl={3}>
                            <Card variant="outlined">
                                <CardActionArea sx={{ padding: 2 }} onClick={() => { alert("hello"); }}>
                                    <CardHeader title={note.title} action={<ActionButtonSection noteList={noteList} setNoteList={setNoteList} noteId={note.id} />}>
                                    </CardHeader>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <NoteBodySection content={note.content} />
                                            <TagSection tags={note.tags} />
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                    );
                })}
            </Grid2>

        </Stack>
    )
}