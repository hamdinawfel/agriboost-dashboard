import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import searching from '../../assets/searching.svg'
import notFound from '../../assets/notFound.svg'

//Redux
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root:{
       marginTop:100,
       height:200,
       width:200,
       borderRadius:'50%',
       backgroundColor:'#fff',
       display:'block',
       margin:'0 auto'
    },
    image:{
        width:200,
        display:'block',
        margin:'0 auto',
        objectFit:'conver'
    },
    animation:{
      animation: `$spin  7s linear infinite`,
    },
    "@keyframes spin": {
      '100% ':{
        transform : 'rotate(360deg)',
      },
    },
  }));


function Loading(props) {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={props.target.notFound?notFound:searching} alt="searching"  className={clsx(classes.image, {[classes.animation]:  props.target.loading})}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    target: state.target,
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Loading);