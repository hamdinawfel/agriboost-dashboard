import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//utlils
import Navbar from "../utils/Navbar";
//components
import Header from "./components/Header";
import Main from "./components/Main";
//Redux
import { connect } from "react-redux";
import { getCandidateByCin } from "./actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  navigation: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
    position: "relative",
    zIndex: 2,
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
  },
}));
function Target() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Header />
          <Main />
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  target: state.target,
});
const mapActionsToProps = {
  getCandidateByCin,
};
export default connect(mapStateToProps, mapActionsToProps)(Target);
