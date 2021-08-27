import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//M-UI ICONS
import DashboardIcon from '@material-ui/icons/Dashboard';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import AdjustIcon from '@material-ui/icons/Adjust';
//assets
import banner from './images/banner.jpg'
//Redux
import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 150,
    // marginTop:200
  },
  banner:{
    width:'100%',
    height:60,
    [theme.breakpoints.down('xs')]: {
      height:'auto',
      width:'360px',
  },
},
}));

function Navbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const handleLogOut = () => {
    props.logoutUser()
  }
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} color='inherit'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <img src={banner} alt="banner" className={classes.banner} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <Link to='/' style={{ color:'inherit', textDecoration:'none'}}>
                <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link to='/candidates' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <DynamicFeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Candidatures" />
              </ListItem>
            </Link>
            <Link to='/target' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <AdjustIcon />
                  </ListItemIcon>
                  <ListItemText primary="Recherche par CIN" />
              </ListItem>
            </Link>
            {props.admin.user.root?
            <Link to='/users' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Administrateurs" />
              </ListItem>
            </Link>:null}
            <Link to='/profile' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mon Profil" />
              </ListItem>
            </Link>
              <ListItem button onClick={handleLogOut}>
                  <ListItemIcon>
                      <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Déconnextion" />
              </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  admin: state.admin
});
const mapActionsToProps = {
  logoutUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Navbar);