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
  export default  function SupplementaryInfo(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.city} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
                الولاية  
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.village} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            المعتمدية	
                </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.address} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            العنوان	
                </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.civilStatus} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            الحالة المدنية
                </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.edicationalLevel} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            المستوى التعليمي 
                </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.lastStadyLevel} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            تاريخ آخر مستوى تعليمي
                </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
            {props.email} 
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
            <Typography component="p" >
                عنوان البريد الإلكتروني
                </Typography>
        </Grid>
    </Grid>
  );
}
