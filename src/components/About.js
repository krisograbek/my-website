import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import about from "./data/about.json"
import Emoji from "./Emoji";


const imgWidth = 5;
const textWidth = 7;

const useStyles = makeStyles(() => ({
  aboutRoot: {
    padding: '30px',
    // maxWidth: '80%'
  },
  textItem: {
    padding: '16px'
  }
}));

function About() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.aboutRoot}
      container
      direction="column"
      alignItems="center"
      alignContent="center"
      spacing={3}
    >
      <Grid item>
        <Grid container>
          <Grid item className={classes.textItem}>
            <div>My name is Kris. Actually, it's Krzysztof but I've seen it misspelled in 2 thousand different ways.
              So, let's stick with Kris</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container
          alignContent="center"
          alignItems="center"
          spacing={2}>
          {/* <Grid item>
            <Emoji name="writing" />
          </Grid> */}
          <Grid item xs={textWidth} className={classes.textItem}>
            <div> <Emoji name="writing" />Writing was life-changing for me. Every day around 4.30AM, I write in my gratitude Journal.
              But it all started with just an ordinary journal in December 2019. I made it my daily habit.
              My Journal is my go to place when I
              <ul>
                <li>Set my goals</li>
                <li>Have any kind of issues</li>
                <li>Summarize days / week / quartals</li>
                <li>Want to improve any part of my life</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={imgWidth}>
            <img style={{ maxWidth: "100%" }} src="images/journals1.jpg" alt="something wrong?"></img>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container
          alignContent="center"
          alignItems="center"
          spacing={2}>
          {/* <Grid item>
            <Emoji name="writing" />
          </Grid> */}
          <Grid item xs={imgWidth}>
            <img style={{ maxWidth: "100%" }} src="images/books1.jpg" alt="something wrong?"></img>
          </Grid>
          <Grid item xs={textWidth} className={classes.textItem}>
            <div> <Emoji name="books" /> Reading is crucial.
              I read books about
              <ul>
                <li>Personal growth</li>
                <li>Psychology</li>
                <li>Learning</li>
                <li>Data Science</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container
          alignContent="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={textWidth} className={classes.textItem}>
            <div> <Emoji name={["open_book", "nerd_face", "thinking_face", "bulb"]} />At the age of 32 I became a Lifelong Learner. Since:
              <ul>
                <li>I've developed the Growth Mindset</li>
                <li>I know I can learn anything</li>
                <li>Learning has become my true hobby</li>
                <li>I don't compare myself with others</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={imgWidth}>
            <img style={{ maxWidth: "100%" }} src="images/learning1.jpg" alt="something wrong?"></img>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container
          alignContent="center"
          alignItems="center"
          spacing={2}>
          {/* <Grid item>
            <Emoji name="writing" />
          </Grid> */}
          <Grid item xs={imgWidth} className={classes.textItem}>
            <img style={{ maxWidth: "100%" }} src="images/basket1.jpg" alt="something wrong?"></img>
          </Grid>
          <Grid item xs={textWidth}>
            <div> <Emoji name="basketball" /> For 25 years I've been playing basketball.
              It's been an important part of my life. My place where I can compete, exercise, and disconnect.
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default About;
