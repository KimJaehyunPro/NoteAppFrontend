import { Box, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';

export default function CreateNotePage(props) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                id='note-title'
                label="Title"
                multiline
            />

            <TextField
                id='note-content'
                label="Content"
                multiline
                rows={20}
            />

            <Button variant="contained">Contained</Button>

        </Box>
    )
}