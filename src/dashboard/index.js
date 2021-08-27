import React from 'react';
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
//Components
import Header from './components/Header'
//utils
import Navbar from '../utils/Navbar'
//Redux
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    position:'relative',
    zIndex:2
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Header />
        </Container>
      </main>
          
    </div>
  );
}
const mapStateToProps = (state) => ({
  // dashboard : state.dashboard,
});
const mapActionsToProps = {
  
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Dashboard);