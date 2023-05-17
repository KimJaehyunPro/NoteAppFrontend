import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import useRandomId from '../../Hooks/useRandomId';

import AnalyticsIcon from '@mui/icons-material/Analytics';

import { List, ListItem, ListItemButton, ListItemText,ListItemIcon } from '@mui/material'
import { LOGIN_URL, NOTE_URL } from '../../Constants/endpoints';

export default function RandomNoteTab(props) {

    const navigate = useNavigate();

    const randomId = useRandomId();

    const isLoggedIn = (sessionStorage.getItem("accessToken") != null);

    return (
        isLoggedIn ? 
            <List>
                <ListItem key="Random" >
                    <ListItemButton onClick={() => {
                        randomId().then(randomId => {
                            if (isLoggedIn) {
                                navigate(`${NOTE_URL}/${randomId}`);
                            } else {
                                navigate(`../${LOGIN_URL}`);
                            }
                        })
                    }}>
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Random Page" />
                    </ListItemButton>
                </ListItem>
            </List>
            
            : null
    )
}