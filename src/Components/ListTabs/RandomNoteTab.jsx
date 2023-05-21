import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import useRandomId from '../../Hooks/useRandomId';

import AnalyticsIcon from '@mui/icons-material/Analytics';

import { List, ListItem, ListItemButton, ListItemText,ListItemIcon } from '@mui/material'
import { NOTE_URL } from '../../Constants/endpoints';

export default function RandomNoteTab(props) {

    const navigate = useNavigate();

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