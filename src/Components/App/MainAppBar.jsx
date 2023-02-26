import { AppBar, Typography, Toolbar, IconButton } from '@mui/material';

export default function MainAppBar(props) {

  const drawerWidth = props.drawerWidth;
  const handleDrawerToggle = props.handleDrawerToggle;

  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{alignSelf: "center"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography variant="h5" noWrap component="div" sx={{fontWeight: "bold"}}>
            My Note
          </Typography>

        </Toolbar>
      </AppBar>

  )
}