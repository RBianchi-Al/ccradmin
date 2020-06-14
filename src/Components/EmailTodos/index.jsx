

import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TransferList from './text'
import FormPosto from './formu'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 0,
      marginRight: 50,
      marginLeft: 100,
      marginTop: 0,
      marginBottom: 0,
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TransferList/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
           <FormPosto/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>

        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>POSTOS CERTIFICADOS 395</Paper>
        </Grid> */}
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>ALIMENTAÇÃO 340</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>ATENDIMENTO MÉDICO 248</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>LAZER 450</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

