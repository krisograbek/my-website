import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import models from "./data/models.json";
import Video from "./Video";

function Models() {
  return (
    <Grid item xs={8}>
      <h1>Models</h1>
      <Grid
        container
        direction="column"
        spacing={3}
      >
        {models.map((model) => {
          return (
            <Grid item>
              <Grid
                container
                direction="column"
              >
                <Grid item>
                  <Link
                    className="LinkStyle external"
                    to={{
                      pathname: `${model.appUrl}`
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {model.title}
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    className="LinkStyle external"
                    to={{
                      pathname: `${model.githubUrl}`
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </Link>
                </Grid>
                <Grid item>
                  <Typography>About the project: {model.description}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Technological stack: {model.techStack}</Typography>
                </Grid>
                <Grid item>
                  <Video myUrl={model.videoLink} />
                </Grid>
              </Grid>
            </Grid>
          )
        })
        }
      </Grid>
    </Grid>
  )
}

export default Models;
