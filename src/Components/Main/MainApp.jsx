import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';
import MainContainer from './MainContainer';

export default function MainApp(props) {

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
      <MainAppBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <MainDrawer drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} container={container}/>
      <MainContainer drawerWidth={drawerWidth}/>
    </Box>
  );
} 