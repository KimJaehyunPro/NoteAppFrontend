import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import useRandomId from '../../Hooks/useRandomId';

import AnalyticsIcon from '@mui/icons-material/Analytics';

import { List, ListItem, ListItemButton, ListItemText,ListItemIcon } from '@mui/material'
import { LOGIN_URL, NOTE_URL } from '../../Constants/endpoints';

export default function RandomNoteTab(props) {

    const navigate = useNavigate();

    const isLoggedIn = (sessionStorage.getItem("tokenType"));
    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate(`../${LOGIN_URL}`);
        }
    }, [navigate, isLoggedIn])

    const randomId = useRandomId();
    
    return (
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
    )
}