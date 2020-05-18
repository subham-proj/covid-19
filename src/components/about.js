import React from "react";
import {Container} from 'react-bootstrap';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {Badge,Avatar,makeStyles,withStyles} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Me from '../images/about.jpg';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);


  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        boxShadow: '0px 4px 5px #5F5F5F',
      },
  }));


function About () {
    const classes = useStyles();
  return (

    <Container>
    <MDBCard className="my-5 px-4 pb-5">
      <MDBCardBody>
       
        <MDBRow>
          <MDBCol lg="4" >
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <div className={classes.root}>
                <StyledBadge overlap="circle" anchorOrigin={{  vertical: 'bottom',horizontal: 'right',}}variant="dot">
                    <Avatar alt="S" src={Me} className={classes.large}/>
                </StyledBadge>
            
            </div>
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="8" >
            
              <h3 className="font-weight-bold mb-3 p-0">
                Subham Singh
              </h3>
            
            <h5 className="font-weight-bold mb-3 p-0" style={{color:"grey"}}>
              Web Developer
            </h5>
            <p>
             Hey there,
             I am a full stack web developer and CSE undeegrad. I have made
             this Web App using React.js and styling is done by Material-Ui and
             MDBReact. 
             This App renders the data using API which takes data from <a href="#"> mohfw.go.in </a>
             and updates in every few hour.
            </p>
            
            <div className="social">
            <a href="https://www.facebook.com/shubhu.ak" style={{color: 'black'}}><FacebookIcon fontSize='large'/></a>
            <a href="https://www.linkedin.com/in/subham-singh-cc/" style={{color: 'black'}}><LinkedInIcon fontSize='large'/></a>
            <a href="https://www.instagram.com/shubham__ig/" style={{color: 'black'}}><InstagramIcon fontSize='large'/></a>
            </div>
          </MDBCol>
        </MDBRow>

</MDBCardBody>
    </MDBCard>
    </Container>
  );
}

export default About;




