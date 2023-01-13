
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import * as React from 'react';

import MainDrawerContent from './MainDrawerContent';

export default function MainDrawer(props) {
    
    const drawer_width = props.drawer_width;
    const handleDrawerToggle = props.handleDrawerToggle;
    const mobileOpen = props.mobileOpen;

    return (

        <div>
            <Box
                component="nav"
                sx={{ width: { sm: drawer_width }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawer_width },
                    }}
                >
                    <MainDrawerContent drawer_width={drawer_width} handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawer_width },
                    }}
                    open
                >
                    <MainDrawerContent drawer_width={drawer_width} handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
            </Box>
            
        </div>

    )
}