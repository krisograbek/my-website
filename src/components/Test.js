import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


export default function Test(){
    const classes = useStyles()

    return(
        <Grid 
            container
            // justifyContent="flex-end"
            // alignContent="space-between"
            spacing={5}
        >
            <Grid item xs={12}>
                <Paper className={classes.paper}>Nav 1</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>Nav 2</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>Nav 3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>Nav 4</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>Nav 4</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>Nav 4</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>Nav 4</Paper>
            </Grid>
        </Grid>
    )
}
