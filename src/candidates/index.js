import React from "react";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
//Components
import SubmittedList from "./components/SubmittedList";
import RejectedList from "./components/RejectedList";
import WaitingList from "./components/WaitingList";
import InitialList from "./components/InitialList";
import FinalList from "./components/FinalList";
//utlils
import Navbar from "../utils/Navbar";
//Redux
import { connect } from "react-redux";
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

function Candidates(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <div className={classes.navigation}>
            <TabContext value={value}>
              <div style={{ padding: "0 24px" }}>
                <AppBar
                  position='static'
                  color='inherit'
                  variant='outlined'
                  style={{ borderRadius: 5 }}>
                  <TabList
                    onChange={handleChange}
                    aria-label='simple tabs example'
                    indicatorColor='primary'
                    textColor='primary'
                    centered>
                    <Tab
                      label={`قائمة المترشحين ${
                        value === "1" ? props.candidates.submittedCount : ""
                      }`}
                      value='1'
                    />
                    <Tab
                      label={`قائمة المرفوضين  ${
                        value === "2" ? props.candidates.rejectedCount : ""
                      }`}
                      value='2'
                    />
                    <Tab
                      label={`قائمة الإنتضار  ${
                        value === "3" ? props.candidates.waitedCount : ""
                      }`}
                      value='3'
                    />
                    <Tab
                      label={`القائمة الأولية   ${
                        value === "4" ? props.candidates.initialCount : ""
                      }`}
                      value='4'
                    />
                    <Tab
                      label={`القائمة النهائية   ${
                        value === "5" ? props.candidates.finalCount : ""
                      }`}
                      value='5'
                    />
                  </TabList>
                </AppBar>
              </div>
              <TabPanel value='1'>
                <SubmittedList />
              </TabPanel>
              <TabPanel value='2'>
                <RejectedList />
              </TabPanel>
              <TabPanel value='3'>
                <WaitingList />
              </TabPanel>
              <TabPanel value='4'>
                <InitialList />
              </TabPanel>
              <TabPanel value='5'>
                <FinalList />
              </TabPanel>
            </TabContext>
          </div>
        </Container>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => ({
  candidates: state.candidates,
});
export default connect(mapStateToProps, null)(Candidates);
