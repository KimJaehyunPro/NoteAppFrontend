import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CreateIcon from '@mui/icons-material/Create';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ListItemIcon from '@mui/material/ListItemIcon';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { GET_RANDOM_NOTE_ID_API_RUL } from '../../Constants/endpoints';

export default function MainDrawerChoice(props) {

    const navigate = useNavigate();

    return (
        <div>
            <Toolbar />
            <Divider />

            <List>
                <ListItem key="ShowAllNotes">
                    <ListItemButton href="/notes">
                        <ListItemIcon>
                            <ImportContactsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Show All Notes" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Write Note">
                    <ListItemButton href="/notes/create">
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>

                        <ListItemText primary="Write Note" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Random" >
                    <ListItemButton onClick={() => {
                        // Okay, if you clicked this, make a request to Random API
                        fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
                            .then(response => response.json())
                            .then((data) => {
                                // Get the randomNoteId
                                navigate(`notes/${data.noteId}`);
                            })
                    }}>
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Random Page" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}