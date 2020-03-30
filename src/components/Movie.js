import React from "react";
import {
  Card,
  CardActionArea,
  makeStyles,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%"
  },
  media: {
    height: "500px"
  },
  fullHeight: {
    height: "325px"
  }
});

export default function Movie({ title, poster_path, overview }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          title="Contemplative Reptile"
        />
        <Grid container className={classes.fullHeight}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {overview}
            </Typography>
          </CardContent>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
