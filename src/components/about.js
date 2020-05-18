import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import VerticalAlignTopRoundedIcon from '@material-ui/icons/VerticalAlignTopRounded';
import {Link} from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: "#E0E0E0",
      color: theme.palette.text.secondary,
    },
  }));

export default function About (){
    const classes = useStyles();
    return(
        <section id="about">
        <Container style={{padding: 40}}>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={5}>
                This App is a community source listing platform. It fetches the data from <a href="https://www.mohfw.gov.in">mohfw.gov.in</a> and updates
                in every few hour. we verify all our listings, we request you to follow all the guidelines and take the necessary precautions. &nbsp; &nbsp;
                <Link to="home" style={{border:"1px solid black"}} smooth={true} duration={2000}><VerticalAlignTopRoundedIcon/></Link>
          </Paper>
        </Grid>
        </Grid>
        </div>
        </Container>
        </section>
    );
}






