import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderRadius: 2,
    padding: 5,
  },
  item: {
    background: "#fff",
    border: "1px solid #f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 5px",
  },
}));
export default function SupplementaryInfo(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.item}>
        <span>{props.edicationalLevel}</span>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <span>المستوى التعليمي</span>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <span>{props.lastStadyLevel}</span>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <span>تاريخ الإنتهاء أو الإنقطاع عن الدراسة</span>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <span>{props.isCandidateHaveCnss}</span>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <span>الإنخراط بالصندوق الوطني للضمان الاجتماعي</span>
      </Grid>
      <Grid
        item
        xs={4}
        className={classes.item}
        style={{
          background: props.isCandidateHaveCnss === "لا" ? "#f5f5f5" : "#fff",
        }}>
        <span>{props.snssDuration}</span>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <span>مدة الإنخراط بالصندوق الوطني للضمان الاجتماعي</span>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <span>{props.isCandidateHavePatente}</span>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <span>متحصل على معرف جبائي</span>
      </Grid>
      <Grid
        item
        xs={4}
        className={classes.item}
        style={{
          background:
            props.isCandidateHavePatente === "لا" ? "#f5f5f5" : "#fff",
        }}>
        <span>{props.patenteDuration}</span>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <span>مدة فعالية المعرف الجبائي</span>
      </Grid>
    </Grid>
  );
}
