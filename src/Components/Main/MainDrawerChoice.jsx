import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CreateIcon from '@mui/icons-material/Create';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InfoIcon from '@mui/icons-material/Info';
import ListItemIcon from '@mui/material/ListItemIcon';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useRandomNoteId from '../../Hooks/useRandomNoteId';

import { GET_RANDOM_NOTE_ID_API_RUL } from '../../Constants/endpoints';

function fetchRandomNoteId() {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/${GET_RANDOM_NOTE_ID_API_RUL}`)
        .then(response => response.json())
        .then((data) => {
            return data.noteId;
    })
}

export default function MainDrawerChoice(props) {

    const [randomNoteMenuClicked, setRandomNoteMenuClicked] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (randomNoteMenuClicked) {
            fetchRandomNoteId().then(noteId => {
                navigate(noteId)
            })
        }
    }, [randomNoteMenuClicked])


    // useRandomNoteId().then((noteIdData) => {
    //     setNoteId(noteIdData);
    // })
    
    // React.useEffect(() => {
    //     if (noteId) {
    //         navigate(`../notes/${noteId}`);
    //     }
    // }, [noteId, navigate])


    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem key="About">
                    <ListItemButton href="/">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>

                        <ListItemText primary="About" />
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
                        // Okay, if you clicked this, make a request to Random API
                        setRandomNoteMenuClicked(true);
                        // Get the randomNoteId
                        // And Navigate there.
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