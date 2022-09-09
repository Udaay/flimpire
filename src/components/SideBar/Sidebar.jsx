import React, { useEffect } from 'react';
import { List, ListItem, ListSubheader, ListItemIcon, Box, CircularProgressBar, Button, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme, styled, alpha } from '@mui/material/styles';
import useStyles from './sideBarStyles';

const category = [
  {
    label: 'Popular',
    value: 'popular',
  },
  {
    label: 'Top Rated',
    value: 'top_rated',
  },
  {
    label: 'Upcoming',
    value: 'upcoming',
  },
];

const genre = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

// const StyledListSubheader = styled(ListSubheader)(() => ({
//   backgroundColor: 'aliceblue',
//   zIndex: 1,
// }));

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          alt="Logo"
          className={classes.image}
          src={theme.palette.mode === 'dark' ? redLogo : blueLogo}
        />
      </Link>

      <div className={classes.divider} />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {category.map(({ label, value }) => (
          <Link to="/" key={value} className={classes.links}>
            <ListItemButton onClick={() => console.log(value)}>
              <>
                <img alt={label} src={blueLogo} className={classes.genreImage} />
                {label}
              </>
            </ListItemButton>
          </Link>
        ))}
      </List>

      <div className={classes.divider} />
      <List className={classes.genreList}>
        <ListSubheader>Genres</ListSubheader>
        {genre.map(({ name, id }) => (
          <Link to="/" key={id} className={classes.links}>
            <ListItemButton onClick={() => console.log(name)}>
              <>
                <img alt={name} src={blueLogo} className={classes.genreImage} />
                {name}
              </>

            </ListItemButton>
          </Link>
        ))}
      </List>

    </>
  );
};

export default Sidebar;
