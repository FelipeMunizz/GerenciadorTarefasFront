import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://felipemunizz.github.io/" target='_blank'>
        Felipe Muniz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const info = new FormData(event.currentTarget);
    const data = {usuario: info.get('usuario'), senha: info.get('senha')}
    fetch('https://localhost:7140/api/Usuarios/Login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="usuario" label="Usuário" name="usuario" autoComplete="usuario" autoFocus />
            <TextField margin="normal" required fullWidth name="senha" label="Senha" type="password" id="senha" autoComplete="current-password" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              conectar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ textDecoration: 'none' }}>
                  Esqueceu a Senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2" style={{ textDecoration: 'none' }}>
                  {"Não possui uma conta? Registre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}