import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CreateIcon from '@mui/icons-material/Create';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InfoIcon from '@mui/icons-material/Info';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function MainDrawerChoice(props) {

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
                <ListItem key="Tech">
                    <ListItemButton href="/tech">
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Tech" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Random" >
                    <ListItemButton href="/random">
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