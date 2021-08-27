import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//Icons
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
//components
import PersonelInfo from '../../candidates/components/PersonelInfo'
import SupplementaryInfo from '../../candidates/components/SupplementaryInfo'
import SocialInfo from '../../candidates/components/SocialInfo'
import Title from '../../candidates/components/Title'
//Redux
import { connect } from 'react-redux';
import { getCandidateDetails } from '../../candidates/actions';
import { editCandidateState } from '../actions';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
    //   borderBottom: 'unset',
      borderBottom: '1px solid #eee !important',
      
    },
  },
  container:{
    display: 'flex', 
    justifyContent:'space-between',  
    backgroundColor:'#f5f5f5',
    borderRadius:2, 
    padding:5
  },
  item:{
    background:'#fff',
    border:'1px solid #f5f5f5',
    display:'flex',
    alignItems:'center',
    padding:'0 5px', 
    justifyContent: 'flex-end'
  }
});

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  const [ open, setOpen] = React.useState(false);
  const [ edit, setEdit] = React.useState(false);
  const [ status, setStatus] = React.useState('');
  
  const handleGetDetails = (candidateId) => {
    props.getCandidateDetails(candidateId)
    setOpen(!open);
    setStatus('');
  }
  const handleEditCandidateState = (candidateId, condidateCin) => {
    props.editCandidateState(candidateId, {status}, condidateCin)
  }
  
  return (
    <React.Fragment>
      <TableRow className={classes.root} style={{borderBottom: '1px solid #eee !important'}} >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={()=>handleGetDetails(row._id)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
         {row.firstName} {row.lastName}
        </TableCell>
        <TableCell align="right">{row.cin}</TableCell>
        <TableCell align="right">{row.village}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.totalScore}</TableCell>
        { edit?
            <TableCell align="right" style={{ display:'flex', justifyContent: 'flex-start', padding:12}}>
              <div style={{ display:'flex', alignItems: 'center', justifyContent:'flex' }}>
                  <IconButton onClick={()=>setEdit(false)}>
                    <CloseIcon style={{fontSize:18}}/>
                  </IconButton>
                  <IconButton onClick={()=>handleEditCandidateState(row._id, row.cin)}>
                    <DoneIcon style={{fontSize:18}} />
                  </IconButton>
              </div>
              <TextField 
                  select
                  value={status}
                  onChange={(e)=>setStatus(e.target.value)}
                  style={{ minWidth:100, textAlign: 'right'}}
                  InputLabelProps={{
                  classes: { root: classes.labelRoot, shrink: classes.shrink }
                  }}>
                      <MenuItem  value="في مرحلة الفرز" dir="rtl">
                      في مرحلة الفرز
                      </MenuItem>
                      <MenuItem  value="حضي بالرفض" dir="rtl">
                      حضي بالرفض
                      </MenuItem>
                      <MenuItem  value="في قائمة الإنتضار" dir="rtl">
                      في قائمة الإنتضار 
                      </MenuItem>
                      <MenuItem  value="حضي بالقبول مبدئيا" dir="rtl">
                      حضي بالقبول مبدئيا
                      </MenuItem>
                      <MenuItem  value="حضي بالقبول نهائيا" dir="rtl">
                      حضي بالقبول نهائيا
                      </MenuItem>
              </TextField>
        </TableCell>
        :
        <TableCell align="right" style={{ display:'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
          <IconButton style={{marginLeft:5}} onClick={()=>setEdit(true)}>
                <EditIcon style={{fontSize:18}}/>
          </IconButton>
          {row.status}
        </TableCell>}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} style={{borderBottom: '1px solid #F5F5F5', paddingBottom:5}}>
              {!props.loadingDetails?
                <Grid container>
                  <Grid item xs={12}>
                    <Title title="الحالة الإجتماعية" />
                    <SocialInfo />
                  </Grid>
                  <Grid item xs={6} style={{padding:'0 5px'}}>
                    <Title title="المعطيات الشخصية" />
                    <PersonelInfo />
                  </Grid>
                   <Grid item xs={6} style={{padding:'0 5px'}}>
                     <Title title="المعطيات التكميلية" />
                     <SupplementaryInfo />
                   </Grid>
                </Grid>
                :
                <CircularProgress  style={{display:'block', margin:'0 auto'}}/>
              }
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function DataTable(props) {
  return (
    <Table aria-label="collapsible table" size="small">
        <TableHead style={{background:'#eee'}}>
            <TableRow>
                <TableCell />
                 <TableCell>
                  الإسم و اللقب
                  </TableCell>
                <TableCell align="right">ب٠ت٠و</TableCell>
                <TableCell align="right">المعتمدية</TableCell>
                <TableCell align="right">الهاتف</TableCell>
                <TableCell align="right">عدد النقاط </TableCell>
                <TableCell align="center"> الإجراءات </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <Row 
                row={props.target.candidate}
                editCandidateState={props.editCandidateState}
                getCandidateDetails={props.getCandidateDetails}
            />
        </TableBody>
    </Table>
      );
}

const mapStateToProps = (state) => ({
    target: state.target,
    candidates : state.candidates
  });
  const mapActionsToProps = {
    getCandidateDetails,
    editCandidateState
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(DataTable);