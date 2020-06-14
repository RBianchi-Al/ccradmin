import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Grafic from "../Grafics";
import GraficOne from "../Grafics copy";
// import { Link } from 'react-router-dom';
import GraficFour from "../GraficFour";
// import {Title} from 'styles.js'
import MapaCalor from '../GraficoMapaCalor'

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
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grafic />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraficOne />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraficFour />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <MapaCalor/>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>POSTOS CERTIFICADOS 395</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>ALIMENTAÇÃO 340</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>ATENDIMENTO MÉDICO 248</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>LAZER 450</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
