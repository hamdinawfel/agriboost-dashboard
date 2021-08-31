import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex', 
        justifyContent:'space-between',  
        backgroundColor:'#f5f5f5',
        borderRadius:2, 
        padding:5
      },
      item:{
        background:'#fff',
        border:'1px solid #f5f5f5',
        display:'flex',
        alignItems:'center',
        padding:'0 5px', 
        justifyContent: 'flex-end'
      }
  }));
  export default function PersonelInfo(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.firstName}  {props.lastName} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                الإسم و اللقب
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.cin} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                ب٠ت٠و	
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.fingerPrint} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                البصمة	
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.birthDay} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                تاريخ الولادة
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.sexe} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                    الجنس	
                </Typography>
            </Grid>
        </Grid>
  );
}
