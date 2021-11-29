import React, { useState, useEffect } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
//components
import DataTable from "./DataTable";
//Redux
import { connect } from "react-redux";
import { getFinalCandidates, getFinalCount } from "../actions";
//transform div to pdf
import Pdf from "react-to-pdf";
const ref = React.createRef();

function FinalList(props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    props.getFinalCandidates(page);
    props.getFinalCount();
  }, []);
  const handleChangePage = (page) => {
    props.getFinalCandidates(page);
    setPage(page);
  };
  return (
    <TableContainer component={Paper} ref={ref}>
      {!props.candidates.loading ? (
        <DataTable page={page} route='final' />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 100,
          }}>
          <CircularProgress />
        </div>
      )}
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15px 0" }}>
        {!props.candidates.loadingFinalCount && !props.candidates.loading ? (
          <Pagination
            page={page}
            onChange={(e, page) => handleChangePage(page)}
            count={Math.floor(props.candidates.finalCount / 10) + 1}
          />
        ) : null}
      </div>
      <Pdf targetRef={ref} filename='Agriboost' scale={0.8} x={0} y={0}>
        {({ toPdf }) => (
          <Button
            onClick={toPdf}
            color='primary'
            variant='outlined'
            style={{ float: "right", margin: "-50px 50px 0 0" }}>
            طباعة <PrintIcon style={{ marginLeft: 10 }} />
          </Button>
        )}
      </Pdf>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});
const mapActionsToProps = {
  getFinalCandidates,
  getFinalCount,
};
export default connect(mapStateToProps, mapActionsToProps)(FinalList);
