import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  IconButton,
  Badge,
  createMuiTheme,
  Tooltip
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
    marginBottom: "2rem"
  },
  title: {
    flexGrow: 1
  },
  navItem: {
    color: "white"
  }
}));

export default function Nav() {
  const [movies] = useContext(MovieContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const classes = useStyles();

  const handleToggleTheme = () => {
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
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Knat Dev
          </Typography>

          <IconButton aria-label="cart" className={classes.navItem}>
            <Badge badgeContent={movies.length} color="secondary">
              <TheatersIcon />
            </Badge>
          </IconButton>

          <Tooltip title="Toggle Light/Dark Theme">
            <IconButton
              className={classes.navItem}
              onClick={handleToggleTheme}
              aria-label="cart"
            >
              {theme.palette.type === "dark" ? (
                <Brightness4Rounded />
              ) : (
                <Brightness7Rounded />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
