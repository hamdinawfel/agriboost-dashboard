import React, { useEffect } from "react";
import MaterialTable from "material-table";
// import { Redirect } from "react-router";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//utlils
import Navbar from "../utils/Navbar";
//Components
import NewUser from "./components/NewUser";
//Redux
import { connect } from "react-redux";
import { getUsers, editUser, deleteUser } from "./actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    //   height: '100vh',
    overflow: "auto",
    position: "relative",
    zIndex: 2,
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
  },
}));
function Users(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "Administrateur", field: "name" },
      { title: "Email", field: "email", editable: "never" },
      { title: "Téléphone", field: "phone" },
    ],
  });

  useEffect(() => {
    props.getUsers();
  }, []);
  const handleDelete = (customerId) => {
    props.deleteUser(customerId);
  };
  const handleEdit = (customerId, newData) => {
    props.editUser(customerId, newData);
  };

  return (
    <div className={classes.root}>
      {/* {1 === 1 ? null : <Redirect to='/login' />} */}
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <NewUser />
          <MaterialTable
            title='Administrateurs'
            columns={state.columns}
            data={props.users.data}
            isLoading={props.users.loading}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  handleEdit(oldData._id, newData);
                  resolve();
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  handleDelete(oldData._id);
                  resolve();
                }),
            }}
          />
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
});
const mapActionsToProps = {
  getUsers,
  editUser,
  deleteUser,
};
export default connect(mapStateToProps, mapActionsToProps)(Users);
