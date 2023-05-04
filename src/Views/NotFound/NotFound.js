import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';
import { purple, blue } from '@mui/material/colors';

const useStyles  = {
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(to bottom, ${purple[500]}, ${blue[500]})`
  },
  content: {
    textAlign: 'center',
    color: 'write',
  },
};

const NotFound = () => {

  return (
    <div className={useStyles.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" style={useStyles.content}>
            Oops!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={useStyles.content}>
            Página não encontrada.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" component={Link} to="/">
            Voltar para a página inicial
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;