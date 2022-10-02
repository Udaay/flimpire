import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Drawer,
  useMediaQuery,
  Button,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./navBarStyles";

import { Sidebar } from "..";
import SearchBar from "../SearchBar/SearchBar";
import getToken, {movieApi, createSession} from "../../services/authentication";
import { setUser, userSelector } from "../../features/auth";

import { ColorModeContext } from "../../utils/ToggleColorMode";

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const {isAuthenticated, user } = useSelector(userSelector);

  const requestToken = localStorage.getItem("request_token");
  const localSessionId = localStorage.getItem("session_id");

  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    const loginUser = async () => {
      if (requestToken) {
        let sessionId: string;
        if (localSessionId) {
          sessionId = localSessionId;
          // const {data: userData} = await movieApi.get(`/account?session_id=${localSessionId}`);
          // dispatch(setUser(userData));
        } else {
          sessionId = await createSession();
        }
        const {data: userData} = await movieApi.get(`/account?session_id=${sessionId}`);
        dispatch(setUser(userData));
      }
    };

    loginUser();
  }, [dispatch, localSessionId, requestToken]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            // onClick={() => console.log("Toggle mode")}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <SearchBar />}
          <div className={classes.avatarContainer}>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={getToken}>
                Login &nbsp;
                <AccountCircle />
              </Button>
            ) : (
              <Button
                className={classes.LinkButton}
                color="inherit"
                component={Link}
                to={`/profile/${user?.id}`}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar src="https://tinyurl.com/vm7su5ts">US</Avatar>
              </Button>
            )}
          </div>
          {isMobile && <SearchBar />}
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
}

export default NavBar;
