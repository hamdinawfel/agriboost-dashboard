import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Title({title}) {
    return (
        <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center'}}>
           {title}
        </Typography>
    )
}
