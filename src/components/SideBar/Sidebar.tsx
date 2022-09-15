import React, { useEffect } from "react";
import {
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  Button,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, styled, alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./sideBarStyles";
import { useGetGenresQuery } from "../../services/TMBD";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { RootState } from "../../store";

const category = [
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Top Rated",
    value: "top_rated",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

// const StyledListSubheader = styled(ListSubheader)(() => ({
//   backgroundColor: 'aliceblue',
//   zIndex: 1,
// }));

function Sidebar() {
  const theme = useTheme();
  const classes = useStyles();
  const { data: {genres: genreList = []} = {}, isFetching } = useGetGenresQuery();
  console.log(genreList, "genres");
  const redLogo = "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
  const blueLogo = "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

  const dispatch = useDispatch();

  const handleClick = (value: string | number) => {
    dispatch(selectGenreOrCategory(value));
  };

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          alt="Logo"
          className={classes.image}
          src={theme.palette.mode === "dark" ? redLogo : blueLogo}
        />
      </Link>

      <div className={classes.divider} />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {category.map(({ label, value }) => (
          <Link to="/" key={value} className={classes.links} onClick={() => handleClick(value)}>
            <ListItemButton>
              <>
                <img
                  alt={label}
                  src={blueLogo}
                  className={classes.genreImage}
                />
                {label}
              </>
            </ListItemButton>
          </Link>
        ))}
      </List>

      <div className={classes.divider} />
      <List className={classes.genreList}>
        <ListSubheader>Genres</ListSubheader>

        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (genreList.map(({ name, id }) => (
          <Link to="/" key={id} className={classes.links} onClick={() => handleClick(id)}>
            <ListItemButton>
              <>
                <img alt={name} src={blueLogo} className={classes.genreImage} />
                {name}
              </>
            </ListItemButton>
          </Link>
        )))}
      </List>
    </>
  );
}

export default Sidebar;
