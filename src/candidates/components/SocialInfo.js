import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//Redux
const firstOption = "بطاقة العلاج المجاني";
const secondOption = "لا";
function UnemploymentDuration({ unemploymentScore }) {
  return (
    <React.Fragment>
      {unemploymentScore === 3 ? (
        <TableCell align='right'>أكثر من 8 سنوات</TableCell>
      ) : unemploymentScore === 2 ? (
        <TableCell align='right'>بين 5 و8 سنوات</TableCell>
      ) : unemploymentScore === 1 ? (
        <TableCell align='right'>بين 2 و5 سنوات</TableCell>
      ) : (
        <TableCell align='right'>أقل من سنتين</TableCell>
      )}
    </React.Fragment>
  );
}

export default function SocialInfo(props) {
  return (
    <Table
      size='small'
      style={{
        border: "5px solid #f5f5f5",
        borderRadius: 2,
        marginBottom: 10,
      }}>
      <TableHead style={{ borderBottom: "5px solid #f5f5f5" }}>
        <TableRow>
          <TableCell align='right'>إجابة المترشح</TableCell>
          <TableCell align='right'>المعيار</TableCell>
          <TableCell align='right'>العدد المسند</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow style={{ borderBottom: "2px solid #f5f5f5" }}>
          <TableCell align='right'>{props.candidateTreatmentCard}</TableCell>
          <TableCell align='right' component='th' scope='row'>
            نوع بطاقة العلاج المنتفع بها
          </TableCell>
          <TableCell align='right'>
            {props.candidateTreatmentCard === firstOption ? 4 : 3}
          </TableCell>
        </TableRow>
        <TableRow style={{ borderBottom: "2px solid #f5f5f5" }}>
          <TableCell align='right'>{props.isCandidateHaveChildren}</TableCell>
          <TableCell align='right' component='th' scope='row'>
            أب أو أم لأبناء على مقاعد الدراسة
          </TableCell>
          <TableCell align='right'>
            {props.isCandidateHaveChildren === secondOption ? 0 : 1}
          </TableCell>
        </TableRow>
        <TableRow style={{ borderBottom: "2px solid #f5f5f5" }}>
          <TableCell align='right'>{props.isCandidateHaveSiblings}</TableCell>
          <TableCell align='right' component='th' scope='row'>
            هل لديك إخوة بأعمار دون 18 سنة
          </TableCell>
          <TableCell align='right'>
            {props.isCandidateHaveSiblings === secondOption ? 0 : 1}
          </TableCell>
        </TableRow>
        <TableRow style={{ borderBottom: "2px solid #f5f5f5" }}>
          <TableCell align='right'>
            {props.isCandidateHaveAnetiInscription}
          </TableCell>
          <TableCell align='right' component='th' scope='row'>
            مسجل لدى مكتب التشغيل و العمل المستقل
          </TableCell>
          <TableCell align='right'>
            {props.isCandidateHaveAnetiInscription === secondOption ? 0 : 1}
          </TableCell>
        </TableRow>
        <TableRow style={{ borderBottom: "2px solid #f5f5f5" }}>
          <UnemploymentDuration unemploymentScore={props.unemploymentScore} />
          <TableCell align='right' component='th' scope='row'>
            مدة البطالة
          </TableCell>
          <TableCell align='right'>{props.unemploymentScore}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
