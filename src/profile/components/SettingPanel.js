import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
//mui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
//
import Loading from "./Loading";
//redux
import { connect } from "react-redux";
import { editProfile, changePassword } from "../../auth/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 100px 0",
    },
  },
  userProfile: {
    padding: "20px 0 0 0 ",
  },
  formBox: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: 20,
    },
  },
  button: {
    margin: "40px 0",
    width: 300,
    display: "block",
    padding: "15px 0",
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
  },
  section: {
    fontSize: 20,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
function SettingPanel(props) {
  const classes = useStyles();
  //
  const [upadetedSection, setUpadetedSection] = useState("");

  //edit profile
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleEditName = (e) => {
    e.preventDefault();
    props.editProfile(props.admin.user._id, { name });
    setName("");
    setUpadetedSection("name");
  };
  const handleEditPhone = (e) => {
    e.preventDefault();
    if (phone !== "") {
      props.editProfile(props.admin.user._id, { phone });
      setPhone("");
      setUpadetedSection("phone");
    }
  };
  //change pw
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState({});

  const handleChangePassword = (e) => {
    e.preventDefault();
    const passwordData = {
      newPassword,
    };
    props.changePassword(passwordData);
    setUpadetedSection("password");
  };
  useEffect(() => {
    setError(props.admin.errors);
  }, [props.admin.errors]);
  //success message

  return (
    <div className={classes.root}>
      <Grid container className={classes.userProfile}>
        <Grid item md={3} xs={12}>
          <p className={classes.section}>Editez votre Profile</p>
        </Grid>
        <Grid item md={9} xs={12}>
          <form className={classes.formBox} onSubmit={handleEditName}>
            <p style={{ margin: "0 0 20px 0" }}>Nom et Prénom</p>
            <TextField
              id='name'
              required
              label='Nom et Prénom'
              style={{ width: 300 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant='outlined'
            />
            <Button
              disabled={props.admin.loading && upadetedSection === "name"}
              className={classes.button}
              type='submit'
              color='primary'
              variant='contained'>
              {props.admin.loading && upadetedSection === "name" ? (
                <Loading />
              ) : (
                "ENREGISTRER"
              )}
            </Button>
          </form>
          <form className={classes.formBox} onSubmit={handleEditPhone}>
            <p style={{ margin: "20px 0" }}>Téléphone</p>
            <PhoneInput
              masks={{
                tn: ".. ... ...",
              }}
              inputProps={{
                name: "phone",
                required: true,
              }}
              country={"tn"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
            <Button
              disabled={props.admin.loading && upadetedSection === "phone"}
              className={classes.button}
              type='submit'
              color='primary'
              variant='contained'>
              {props.admin.loading && upadetedSection === "phone" ? (
                <Loading />
              ) : (
                "ENREGISTRER"
              )}
            </Button>
          </form>
        </Grid>
      </Grid>
      <Grid container className={classes.userProfile}>
        <Grid item md={3} xs={12}>
          <p className={classes.section}>Changer votre Mot de Passe</p>
        </Grid>
        <Grid item md={9} xs={12}>
          <form className={classes.formBox} onSubmit={handleChangePassword}>
            <p style={{ margin: "0 0 20px 0" }}>Mot de passe</p>
            <TextField
              style={{ width: 300 }}
              required
              type='password'
              label='Nouveau mot de passe'
              error={error.newPassword}
              helperText={error.newPassword}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              variant='outlined'
            />
            <Button
              disabled={props.admin.loading && upadetedSection === "password"}
              className={classes.button}
              color='primary'
              variant='contained'
              type='submit'>
              {props.admin.loading && upadetedSection === "password" ? (
                <Loading />
              ) : (
                "ENREGISTRER"
              )}
            </Button>
          </form>
        </Grid>
      </Grid>
      <Snackbar open={props.admin.showSuccessMsg} autoHideDuration={5000}>
        <Alert severity='success'>
          Votre profil a été mis à jour avec succés
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  admin: state.admin,
});
const mapActionsToProps = {
  editProfile,
  changePassword,
};
export default connect(mapStateToProps, mapActionsToProps)(SettingPanel);
