import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Container} from 'react-bootstrap';
import '../App.css';
import {Typography,Card,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Disp ({data: {updated,cases,todayCases,deaths,todayDeaths,recovered,active} }) {
    const classes = useStyles();
    
    if(!updated){
        return "Loading..";
    }
    if(!active){
        return "Loading..";
    }
    if(!cases){
        return "Loading..";
    }
    if(!deaths){
        return "Loading..";
    }
    if(!todayCases){
        return "Loading..";
    }
    if(!todayDeaths){
        return "Loading..";
    }
    if(!recovered){
        return "Loading..";
    }


  


  return (
      
    
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>

        <React.Fragment>
        <Grid item xs={4} sm={4} >
        <Card className={classes.root} style={{border:"1px solid red"}}  className="c1">
      <CardContent>
        <Typography className={classes.title}  align="Center" color="textSecondary" gutterBottom>
          Confirmed
        </Typography>
        <Typography variant="h5" component="h2" align="Center" style={{color:"red"}}>
            <CountUp start={0} end={cases} duration={2} separator="," />
        </Typography>
       
        <Typography variant="body2" component="p" align="Center" style={{color:"red"}}>
           + <CountUp start={0} end={todayCases} duration={2} separator="," />
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>



        <Grid item xs={4} sm={4}>
          <Card className={classes.root} style={{border:"1px solid rgb(103, 199, 6)"}} className="c2">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" align="Center" gutterBottom>
          Recovered
        </Typography>
        <Typography variant="h5" component="h2" align="Center" style={{color:"rgb(103, 199, 6)"}}>
            <CountUp start={0} end={recovered} duration={2} separator="," />
        </Typography>
       
        <Typography variant="body2" component="p" align="Center" style={{color:"white"}}>
          .
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>


        <Grid item xs={4} sm={4}>
          <Card className={classes.root} style={{border:"1px solid grey"}} className="c3">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" align="Center" vw="2" gutterBottom>
          Deaths
        </Typography>
        <Typography variant="h5" component="h2" align="Center"  >
            <CountUp start={0} end={deaths} duration={2} separator="," />
        </Typography>
       
        <Typography variant="body2" component="p" align="Center" >
           + <CountUp start={0} end={todayDeaths} duration={2} separator="," />
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
      </React.Fragment>



        </Grid>
        
      </Grid>
    </div>
    
    
  );
}


export default Disp;






