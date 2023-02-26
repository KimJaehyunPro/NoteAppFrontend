import { Outlet } from "react-router-dom";
import MainAppBar from "./MainAppBar";
import MainDrawer from "./MainDrawer";
import CssBaseline from '@mui/material/CssBaseline';

import * as React from 'react';
import { Container, Box, Toolbar } from "@mui/material";

export default function Layout(props) {

    const drawerWidth = 240;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MainAppBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
            <MainDrawer drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} container={container} />
            <Container maxWidth="100%">
                <Box component="main" padding={5}>
                    <Toolbar />
                    <Outlet />
                </Box>
            </Container>
        </Box>
    )
}