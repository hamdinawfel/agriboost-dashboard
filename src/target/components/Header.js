import React, { useState } from "react";
//Mui
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
//Redux
import { connect } from "react-redux";
import { getCandidateByCin } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 3,
    textAlign: "right",
  },
  labelRoot: {
    left: 80,
    fontSize: 18,
  },
  shrink: {
    transformOrigin: "top right",
  },
  button: {
    padding: "0 30px",
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  var cinRegex = /^[0-9]{8}$/;
  const [cin, setCin] = useState("");
  const [cinError, setCinError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cin.match(cinRegex)) {
      props.getCandidateByCin(cin);
      setCinError(false);
    } else {
      setCinError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        type='text'
        error={cinError}
        style={{
          border: !cinError ? "1px solid #6AAF06" : "1px solid #f44336",
        }}
        className={classes.textField}
        label='رقم بطاقة التعريف الوطنية'
        value={cin}
        onChange={(e) => setCin(e.target.value)}
        InputLabelProps={{
          classes: { root: classes.labelRoot, shrink: classes.shrink },
        }}
      />
      <Button
        className={classes.button}
        type='submit'
        disabled={props.target.loading}>
        <SearchIcon style={{ marginRight: 10 }} /> بحث
      </Button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  target: state.target,
});
const mapActionsToProps = {
  getCandidateByCin,
};
export default connect(mapStateToProps, mapActionsToProps)(Header);
