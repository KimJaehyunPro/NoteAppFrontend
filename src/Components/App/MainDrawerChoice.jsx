import { List, ListItem, ListItemButton, ListItemText, Divider, Toolbar, ListItemIcon } from '@mui/material'
import { CREATE_NOTE_URL, LOGIN_URL, NOTE_URL } from '../../Constants/endpoints';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CreateIcon from '@mui/icons-material/Create';

import * as React from 'react';
import RandomNoteTab from '../ListTabs/RandomNoteTab';
import { useNavigate } from 'react-router-dom';

export default function MainDrawerChoice(props) {

    const navigate = useNavigate();

    const isLoggedIn = (sessionStorage.getItem("accessToken") != null);

    return (
        <div>
            
            <Toolbar />
            <Divider />

            {(isLoggedIn ?

            <List>
                <ListItem key="LogOut">
                    <ListItemButton onClick={() => {
                        sessionStorage.removeItem("tokenType");
                        sessionStorage.removeItem("accessToken");
                        navigate(`../${LOGIN_URL}`);
                    }}>
                        <ListItemIcon>
                            <ImportContactsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                </ListItem>
            </List>

            :

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
            )}

            {isLoggedIn?

                <List>
                    <ListItem key="ShowAllNotes">
                        <ListItemButton href={`/${NOTE_URL}`}>
                            <ListItemIcon>
                                <ImportContactsIcon />
                            </ListItemIcon>

                            <ListItemText primary="Show All Notes" />
                        </ListItemButton>
                    </ListItem>
                </List>

                :

                ""
            }

            {isLoggedIn ?
            
                <List>
                    <ListItem key="Write Note">
                        <ListItemButton href={`/${CREATE_NOTE_URL}`}>
                            <ListItemIcon>
                                <CreateIcon />
                            </ListItemIcon>

                            <ListItemText primary="Write Note" />
                        </ListItemButton>
                    </ListItem>
                </List>

                :

                ""
            }

            { isLoggedIn ?
                <RandomNoteTab/>
                :
                ""
            }
        </div>
    )
}