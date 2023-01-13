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
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function MainDrawerChoice(props) {
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem key="About" disablePadding>
                    <ListItemButton href="/">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>

                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="ShowAllNotes" disablePadding>
                    <ListItemButton href="/ShowAllNotes">
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>

                        <ListItemText primary="Show All Notes" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="ReadNote" disablePadding>
                    <ListItemButton href="/ReadNote">
                        <ListItemIcon>
                            <ImportContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Read Note" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Write Note" disablePadding>
                    <ListItemButton href="/WriteNote">
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>

                        <ListItemText primary="Write Note" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Tech" disablePadding>
                    <ListItemButton href="/Tech">
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Tech" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}