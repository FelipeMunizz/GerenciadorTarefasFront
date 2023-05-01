import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CircularProgress, Container, TextField, Link, Grid, Box, Avatar, Button, CssBaseline, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';

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

const Register = () => {
  const [loading, setLoading] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true)
    const info = new FormData(event.currentTarget);
    const data = { nome: info.get('nome'), sobrenome: info.get('sobrenome'), usuario: info.get('usuario'), email: info.get('email'), senha: info.get('senha') }
    fetch('https://localhost:7140/api/Usuarios/Registrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.text();
        setIsRegister(true);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoading(false);
      })
  };

  if(isRegister){
    return <Navigate to='/Login' />
  }

  return (
    <>
      {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} color='secondary' />
      </div> :
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Registrar
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="nome"
                      required
                      fullWidth
                      id="nome"
                      label="Nome"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="sobrenome"
                      label="Sobrenome"
                      name="sobrenome"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="usuario"
                      label="Usuario"
                      name="usuario"
                      autoComplete="user"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="senha"
                      label="Senha"
                      type="password"
                      id="senha"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Cadastrar
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/Login" variant="body2" sx={{ textDecoration: 'none' }}>
                      Já possui uma conta? Faça Login
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      }
    </>
  );
}

export default Register