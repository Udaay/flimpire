import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Drawer, useMediaQuery, Button } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useStyles from './navBarStyles';

import { Sidebar } from '..';

const NavBar = () => {
  console.log('NavBar');
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => console.log('Toggle mode')}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <h5>Search Comp</h5>}
          <div className={classes.avatarContainer}>
            {!isAuthenticated
              ? (
                <Button
                  color="inherit"
                  onClick={() => console.log('Loggin')}
                >
                  Login &nbsp;
                  <AccountCircle />
                </Button>
              )
              : (
                <Button
                  className={classes.LinkButton}
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                >
                  {!isMobile && <>My Movies &nbsp; </>}
                  <Avatar src="https://tinyurl.com/vm7su5ts">US</Avatar>
                </Button>
              )}
          </div>
          {isMobile && <h5>Search Comp</h5>}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              className={classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              onClose={() => setMobileOpen(false)}
            >
              <Sidebar />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
