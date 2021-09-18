import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import about from "./data/about.json"

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px'
  }
}));

function About() {
  const classes = useStyles();

  return (
    <Grid
      item
      className={classes.root}
    >
      <Grid
        container
        direction="column"
        spacing={2}
      >
        {
          about.map((el, i) => {
            return (
              <Grid item>
                <div key={i}>
                  {el.emoji ? <span style={{ fontSize: "20px" }}>{el.emoji} </span> : <div />}
                  {el.text}
                </div>
              </Grid>
            )
          })
        }
      </Grid>
    </Grid>
  )
}

export default About;
