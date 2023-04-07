import { List, ListItem, ListItemButton, ListItemText, Divider, Toolbar, ListItemIcon } from '@mui/material'
import { LOGIN_URL } from '../../Constants/endpoints';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CreateIcon from '@mui/icons-material/Create';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import useRandomId from '../../Hooks/useRandomId';

import { NOTE_URL } from '../../Constants/endpoints';

export default function MainDrawerChoice(props) {

    const navigate = useNavigate();
    const randomId = useRandomId();

    return (
        <div>
            
            <Toolbar />
            <Divider />

            <List>
                <ListItem key="Login">
                    <ListItemButton href={`../${LOGIN_URL}`}>
                        <ListItemIcon>
                            <ImportContactsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
            </List>

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
                        randomId().then(randomId => {
                            navigate(`${NOTE_URL}/${randomId}`);
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