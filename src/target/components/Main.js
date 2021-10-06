import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
//components
import DataTable from "./DataTable";
import Loading from "./Loading";
//Redux
import { connect } from "react-redux";
//transform div to pdf
import Pdf from "react-to-pdf";
const ref = React.createRef();

function Main(props) {
  return (
    <div style={{ marginTop: 40 }}>
      {props.target.showResult ? (
        <TableContainer component={Paper} ref={ref}>
          <DataTable />
          <Pdf targetRef={ref} filename='Agriboost' scale={0.8} x={0} y={0}>
            {({ toPdf }) => (
              <Button
                onClick={toPdf}
                color='primary'
                variant='outlined'
                style={{ float: "right", margin: "20px 80px 20px 0" }}>
                طباعة <PrintIcon style={{ marginLeft: 10 }} />
              </Button>
            )}
          </Pdf>
        </TableContainer>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  target: state.target,
});

export default connect(mapStateToProps, null)(Main);
