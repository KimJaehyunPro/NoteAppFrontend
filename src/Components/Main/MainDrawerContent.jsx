
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

export default function MainDrawerContent(props) {

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>

                <ListItem key="About" disablePadding>
                    <ListItemButton href="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Read Note" disablePadding>
                    <ListItemButton href="/ReadNote">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Read Note" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Write Note" disablePadding>
                    <ListItemButton href="/WriteNote">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Write Note" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Tech" disablePadding>
                    <ListItemButton href="/Tech">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tech" />
                    </ListItemButton>
                </ListItem>
            </List>

        </div>
    )
}