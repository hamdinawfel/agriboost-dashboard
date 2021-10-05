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
import { getWaitedCandidates, getWaitedCount } from "../actions";
//transform div to pdf
import Pdf from "react-to-pdf";
const ref = React.createRef();

function WaitingList(props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    props.getWaitedCandidates(page);
    props.getWaitedCount();
  }, []);
  const handleChangePage = (page) => {
    props.getWaitedCandidates(page);
    setPage(page);
  };
  return (
    <TableContainer component={Paper} ref={ref}>
      {!props.candidates.loading ? (
        <DataTable page={page} route='waited' />
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
        {!props.candidates.loadingWaitedCount && !props.candidates.loading ? (
          <Pagination
            page={page}
            onChange={(e, page) => handleChangePage(page)}
            count={Math.floor(props.candidates.waitedCount / 11) + 1}
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
  getWaitedCandidates,
  getWaitedCount,
};
export default connect(mapStateToProps, mapActionsToProps)(WaitingList);
