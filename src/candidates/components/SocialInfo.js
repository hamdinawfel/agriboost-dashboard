import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//Redux

export default function SocialInfo(props) {
  return (
    <Table size="small" style={{border:'5px solid #f5f5f5', borderRadius:2, marginBottom:10}}>
        <TableHead style={{borderBottom:'5px solid #f5f5f5'}}>
            <TableRow>
            <TableCell align="right">إجابة المترشح</TableCell>
                <TableCell align="right">المعيار</TableCell>
                <TableCell align="right">العدد المسند</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {props.criteriaList.map((row) => (
            <TableRow key={row.name} style={{borderBottom:'2px solid #f5f5f5'}}>
                <TableCell align="right">
                  {row.answer}
                </TableCell>
                <TableCell  align="right" component="th" scope="row">
                    {row.question}
                </TableCell>
                <TableCell align="right">
                  {row.score}
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
  );
}
