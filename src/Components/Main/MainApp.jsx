import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';

import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';
import MainContainer from './MainContainer';

export default function MainApp(props) {

  const drawer_width = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MainAppBar drawer_width={drawer_width} />
      <MainDrawer drawer_width={drawer_width} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      <MainContainer drawer_width={drawer_width}/>
    </Box>
  );
}