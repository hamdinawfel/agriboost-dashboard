import React, { useEffect } from "react";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PeopleIcon from "@material-ui/icons/People";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import WeekendIcon from "@material-ui/icons/Weekend";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
//Components
import Skeleton from "./Skeleton";
//Redux
import { connect } from "react-redux";

import {
  getSubmittedCount,
  getRejectedCount,
  getWaitedCount,
  getFinalCount,
} from "../../candidates/actions";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    boxShadow: "0px 0px 10px rgba(91, 137, 158, 0.5)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 1,
    top: -15,
    left: 15,
    width: 80,
    height: 80,
  },
  icon: {
    color: "#fff",
  },
}));

function Header(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getSubmittedCount();
    props.getRejectedCount();
    props.getWaitedCount();
    props.getFinalCount();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Paper style={{ marginTop: 40, height: 150 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ backgroundColor: "#53AD57" }}
              className={classes.iconContainer}>
              <PeopleIcon fontSize='large' className={classes.icon} />
            </div>
            <Typography
              style={{
                marginTop: 10,
                marginLeft: 30,
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "#53AD57",
              }}
              gutterBottom>
              عدد المترشحين
            </Typography>
          </div>
          {props.candidates.loadingSubmittedCount ? (
            <Skeleton />
          ) : (
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                textAlign: "center",
                color: "#53AD57",
              }}
              gutterBottom>
              {props.candidates.submittedCount}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper style={{ marginTop: 40, height: 150 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ backgroundColor: "#E94340" }}
              className={classes.iconContainer}>
              <ThumbDownIcon fontSize='large' className={classes.icon} />
            </div>
            <Typography
              style={{
                marginTop: 10,
                marginLeft: 30,
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "#E94340",
              }}
              gutterBottom>
              عدد المرفوضين
            </Typography>
          </div>
          {props.candidates.loadingRejectedCount ? (
            <Skeleton />
          ) : (
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                textAlign: "center",
                color: "#E94340",
              }}
              gutterBottom>
              {props.candidates.rejectedCount}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper style={{ marginTop: 40, height: 150 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ backgroundColor: "#06B0C5" }}
              className={classes.iconContainer}>
              <WeekendIcon fontSize='large' className={classes.icon} />
            </div>
            <Typography
              style={{
                marginTop: 10,
                marginLeft: 30,
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "#06B0C5",
              }}
              gutterBottom>
              عدد المنتظرين
            </Typography>
          </div>
          {props.candidates.loadingWaitedCount ? (
            <Skeleton />
          ) : (
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                textAlign: "center",
                color: "#06B0C5",
              }}
              gutterBottom>
              {props.candidates.waitedCount}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper style={{ marginTop: 40, height: 150 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ backgroundColor: "#ffcc00" }}
              className={classes.iconContainer}>
              <EmojiEventsIcon fontSize='large' className={classes.icon} />
            </div>
            <Typography
              style={{
                marginTop: 10,
                marginLeft: 30,
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "#ffcc40",
              }}
              gutterBottom>
              عدد المقبولين
            </Typography>
          </div>
          {props.candidates.loadingFinalCount ? (
            <Skeleton />
          ) : (
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                textAlign: "center",
                color: "#ffcc40",
              }}
              gutterBottom>
              {props.candidates.finalCount}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => ({
  candidates: state.candidates,
});
const mapActionsToProps = {
  getSubmittedCount,
  getRejectedCount,
  getWaitedCount,
  getFinalCount,
};
export default connect(mapStateToProps, mapActionsToProps)(Header);
