import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
//Redux
import { connect } from 'react-redux';
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
function PersonelInfo(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.details.firstName}  {props.details.lastName} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                الإسم و اللقب
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.details.cin} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                ب٠ت٠و	
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.details.fingerPrint} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                البصمة	
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.details.birthDay} 
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                تاريخ الولادة
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Typography component="p" >
                {props.details.sexe} 
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

const mapStateToProps = (state) => ({
    details: state.candidates.details,
  });
  
  export default connect(
    mapStateToProps,
    null
  )(PersonelInfo);