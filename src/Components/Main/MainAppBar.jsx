import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

import * as React from 'react';

export default function MainAppBar(props) {

  const drawer_width = props.drawer_width;
  const handleDrawerToggle = props.handleDrawerToggle;
  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawer_width}px)` },
        ml: { sm: `${drawer_width}px` },
      }}
    >
      
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Available Date Finder
        </Typography>
      </Toolbar>
    </AppBar>
  )
}