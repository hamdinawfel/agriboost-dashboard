import React, { useState, useEffect } from'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//Redux
import { connect } from 'react-redux';
import { addNewUser, open, close } from '../actions';

function NewUser(props) {
  const [open, setOpen] = React.useState(false);
  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  
const handleAddNewUser = (e) => {
  e.preventDefault();
    const userData ={
      name,
      username:email,
      password
    }
    props.addNewUser(userData)

  }

  const handleClickOpen = () => {
    props.open()
  };

  const handleClose = () => {
    props.close();
    setName('');
    setError([]);
    setEmail('');
    setPassword('')
  };

  //ERRORS
  const [ error, setError ] = useState({});
  useEffect(() => {
    setError(props.admin.errors)
  }, [props.admin.errors]);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ marginBottom: 20, marginRight: 20}}>
         Créer un administrateur
      </Button>
      <Dialog open={props.users.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Créer un administrateur </DialogTitle>
        <DialogContent style={{ marginTop:-20}}>
          <form onSubmit={handleAddNewUser} style={{width:400, padding:30}}>
            <TextField
                required
                margin="dense"
                name="name"
                label="Nom et Prénom"
                type="text"
                fullWidth
                value={ name }
                onChange={(e)=>setName(e.target.value)}
            /> 
            <TextField
                required
                margin="dense"
                label="Email"
                name="email"
                type="email"
                fullWidth
                helperText={error.email}
                error={error.email}
                value={ email }
                onChange={(e)=>setEmail(e.target.value)}
            /> 
            <TextField
                required
                margin="dense"
                label="Mot de passe"
                name="password"
                type="password"
                fullWidth
                helperText={error.password}
                error={error.password}
                value={ password }
                onChange={(e)=>setPassword(e.target.value)}
            /> 
            <DialogActions style={{marginTop:30}}>
                <Button onClick={handleClose} color="primary">
                Annuler
                </Button>
                <Button diseabled={props.users.loading} variant="outlined" type="submit" color="primary">
                    Enregistrer 
                </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
    users : state.users,
    admin : state.admin,
  });
  const mapActionsToProps = {
    addNewUser,
    open,
    close
};
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(NewUser);