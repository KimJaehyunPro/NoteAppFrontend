import MainDrawerContent from './MainDrawerContent';

import { Box, Container, Drawer } from '@mui/material';
import * as React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';

export default function MainDrawer(props) {

    const drawerWidth = props.drawerWidth;
    const mobileOpen = props.mobileOpen;
    const handleDrawerToggle = props.handleDrawerToggle;
    const container = props.container;

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem key="About" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Read Note" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Read Note" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Write Note" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Write Note" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem key="Tech" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Tech" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (

        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>

    )
}