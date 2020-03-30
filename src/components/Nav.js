import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  IconButton,
  Badge,
  createMuiTheme
} from "@material-ui/core";
import {
  Brightness7Rounded,
  Brightness4Rounded,
  Theaters as TheatersIcon
} from "@material-ui/icons";
import { ThemeContext } from "./ThemeProvider";
import { purple, pink } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "0.3s ease",
    color: "white"
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Knat Dev
          </Typography>
          <IconButton aria-label="cart" className={classes.root}>
            <Badge badgeContent={movies.length} color="secondary">
              <TheatersIcon />
            </Badge>
          </IconButton>

          <IconButton
            onClick={() => {
              setTheme(
                createMuiTheme({
                  ...theme,
                  palette: {
                    primary: {
                      main: purple[800]
                    },
                    secondary: { main: pink["A400"] },
                    type: theme.palette.type === "dark" ? "light" : "dark"
                  }
                })
              );
            }}
            aria-label="cart"
            className={classes.root}
          >
            {theme.palette.type === "dark" ? (
              <Brightness4Rounded />
            ) : (
              <Brightness7Rounded />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
