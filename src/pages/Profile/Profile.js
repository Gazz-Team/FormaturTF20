import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { IconButton, Box, Grid,
Typography, Avatar, CardActions, CardContent, Button
} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import Accordion from './Accordion'

const useStyles = makeStyles({
  root:{
    'backgroundColor':'lightblue',
    'width' : '90vw',
    'height' :'auto',
    'marginTop' :'150px',
    'position' : 'relative',
    'display' : 'flex',
    'flexDirection' : 'column',
    'justifyContent' : 'center',
    'alignItems' : 'center',
    'borderRadius' : '10px',
  },
  cardContent:{
    'display' : 'flex',
    'flexDirection' : 'column',
    'justifyContent' : 'center',
    'alignItems' : 'center',

  },
  cardActions:{
    'display' : 'flex',
    'flexDirection' : 'column',
    'justifyContent' : 'center',
    'alignItems' : 'center',

  },
  cardContent:{
    'display' : 'flex',
    'flexDirection' : 'column',
    'justifyContent' : 'center',
    'alignItems' : 'center',

  },
  avatar:{
    'width' : '200px',
    'height' : 'auto',
    'marginTop' : '-100px',
    // 'position' : 'absolute',
    'zIndex':'100',
    // 'boxShadow' : '2px 3px solid black',
    // 'boxShadow': 'theme.shadows[3]',
  },
  socialMediaIcon:{
    'display' : 'flex',
    'flexDirection' : 'row',
    'justifyContent' : 'center',
    'alignItems' : 'center',
  },
  accordion:{
    'marginTop':'50px'
  }
});

export default function Profile() {
  const classes = useStyles();
  return (
    <div>


    <Box 
      className={classes.root}
      // boxShadow={2}
      >
        {/* <Box
              boxShadow={2}
              component={Avatar}
        > */}
          <Avatar alt="Profile Image" src='/ihsan.png' className={classes.avatar} />
        {/* </Box> */}
      <Box >
        <CardContent className={classes.cardContent}>
          <Typography variant='h4' >Ihsan Muhammad Fauzan</Typography>
          <Typography variant='p'> Beberapa deskripsi singkat mengenai tokoh yang bersangkutan</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {/* <Button size="small">Learn More</Button> */} 
          <Grid container className={classes.socialMediaIcon}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Grid> 
          <Button>Read More</Button>
        </CardActions>
      </Box>  
    </Box>

    <Box
    className={classes.accordion}
    >   
    <Accordion />
    </Box>

    </div>
  );
}
