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
    padding: "0 5px",
    justifyContent: "flex-end",
  },
}));
export default function SupplementaryInfo(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.edicationalLevel}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>المستوى التعليمي</Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.lastStadyLevel}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>
          تاريخ الإنتهاء أو الإنقطاع عن الدراسة
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.isCandidateHaveCnss}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>
          الإنخراط بالصندوق الوطني للضمان الاجتماعي
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.snssDuration}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>
          مدة الإنخراط بالصندوق الوطني للضمان الاجتماعي
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.cnssId}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>المعرف الوحيد (ص و ض إ)</Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.isCandidateHavePatente}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>متحصل على معرف جبائي</Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.patenteDuration}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>مدة فعالية المعرف الجبائي</Typography>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Typography component='p'>{props.patenteId}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.item}>
        <Typography component='p'>المعرف الجبائي</Typography>
      </Grid>
    </Grid>
  );
}
