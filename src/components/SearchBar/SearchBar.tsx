import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import {Search as SearchIcon} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "../../features/currentGenreOrCategory";

import useStyles from "./searchBarStyles";

function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyDown={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
