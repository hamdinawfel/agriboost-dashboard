import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { getReclamations, deleteReclamation } from "./actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
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

function Reclamations(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      {
        title: "التاريخ",
        field: "date",
        render: (rowData) => <span>{rowData.createdAt.split("T")[0]}</span>,
      },
      { title: "الإسم", field: "firstName" },
      { title: "اللقب", field: "lastName" },
      { title: "ب٠ت٠و	", field: "cin" },
      { title: "الهاتف", field: "phone" },
      { title: "الموضوع", field: "message" },
    ],
  });

  useEffect(() => {
    props.getReclamations();
  }, []);

  const handleDelete = (recalamationId) => {
    props.deleteReclamation(recalamationId);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth='lg' className={classes.container}>
          {props.admin.user.root ? (
            <MaterialTable
              title='Réclamations'
              columns={state.columns}
              data={props.reclamations.data}
              isLoading={props.reclamations.loading}
              editable={{
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleDelete(oldData._id);
                    resolve();
                  }),
              }}
            />
          ) : (
            <MaterialTable
              title='Réclamations'
              columns={state.columns}
              data={props.reclamations.data}
              isLoading={props.reclamations.loading}
            />
          )}
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  reclamations: state.reclamations,
  admin: state.admin,
});
const mapActionsToProps = {
  getReclamations,
  deleteReclamation,
};
export default connect(mapStateToProps, mapActionsToProps)(Reclamations);
