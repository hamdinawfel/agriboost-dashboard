import React, { useState, useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
//components
import DataTable from './DataTable'
//Redux
import { connect } from 'react-redux';
import { getInitialCandidates, getInitialCount } from '../actions';
//transform div to pdf 
import Pdf from "react-to-pdf";
const ref = React.createRef();
function InitialList(props) {
  const [page, setPage] = useState(1);
    useEffect(() => {
        props.getInitialCandidates(page) 
        props.getInitialCount();
    }, []);
    const handleChangePage = (page) => {
      props.getInitialCandidates(page);
      setPage(page)
     }
  return (
        <TableContainer component={Paper} ref={ref}>
           {!props.candidates.loading?
            <DataTable page={page} route="initial"/>
            :
            <div style={{ display:'flex', justifyContent:'center',  alignItems: 'center', width:'100%', height:100}}>
            <CircularProgress/>
          </div>}
          <div style={{display:'flex', justifyContent:'center', margin:'15px 0'}}>
            {!props.candidates.loadingInitialCount && !props.candidates.loading?
              <Pagination 
                page={page}
                onChange={(e, page)=>handleChangePage(page)}
                count={Math.floor(props.candidates.initialCount/11)+1} />: null}
          </div>
          <Pdf targetRef={ref} filename="Agriboost" scale={0.8}  x={0} y={0}>
            {({ toPdf }) => 
              <Button 
                  onClick={toPdf} 
                  color="primary" 
                  variant="outlined" 
                  style={{float:'right', margin:'-50px 50px 0 0'}}
                >طباعة <PrintIcon style={{marginLeft:10}}/>
              </Button> }
           </Pdf>
        </TableContainer>
      );
}

const mapStateToProps = (state) => ({
    candidates: state.candidates,
  });
  const mapActionsToProps = {
    getInitialCandidates,
    getInitialCount,
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(InitialList);