import { Grid, Link } from "@material-ui/core";
import React from "react";
import models from "./data/models.json";
import Video from "./Video";

function Models() {
  return (
    <Grid item>
      <h1>Models</h1>
      <Grid container>
        {models.map((model) => {
          return (
            <Grid item>
              <Link
                href={model.url}
                target="_blank"
                rel="noreferrer"
              >
                {model.title}
              </Link>
              <Video myUrl={model.videoLink} />
            </Grid>
          )
        })
        }
      </Grid>
    </Grid>
  )
}

export default Models;
