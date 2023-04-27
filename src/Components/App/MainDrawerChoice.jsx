import { List, ListItem, ListItemButton, ListItemText, Divider, Toolbar, ListItemIcon } from '@mui/material'
import { LOGIN_URL } from '../../Constants/endpoints';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CreateIcon from '@mui/icons-material/Create';

import * as React from 'react';
import RandomNoteTab from '../ListTabs/RandomNoteTab';

export default function MainDrawerChoice(props) {
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

            <RandomNoteTab/>

        </div>
    )
}