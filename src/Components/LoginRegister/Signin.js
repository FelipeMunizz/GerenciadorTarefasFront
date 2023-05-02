import { useState } from 'react';
import { CircularProgress, Container, TextField, Link, Grid, Box, Avatar, Button, CssBaseline, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from '../Home/Dashboard'
import axios from 'axios';

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

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true)

    const info = new FormData(event.currentTarget);
    const data = {
      usuario: info.get('usuario'),
      senha: info.get('senha')
    }
    try {
      const response = await axios.post('https://localhost:7140/api/Usuarios/Login', data);
      const token = response.data;
      localStorage.setItem('token', token)
      setLoading(false);
      setIsLogged(true);

    } catch (error) {

      setLoading(false)

    }
  };
  
  if (isLogged) {
    return (
      <Dashboard />
    )
  }

  return (
    <>
      {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} color='secondary' />
      </div> :
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="usuario" label="Usuário" name="usuario" autoComplete="usuario" autoFocus />
                <TextField margin="normal" required fullWidth name="senha" label="Senha" type="password" id="senha" autoComplete="current-password" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  {loading ? <CircularProgress size={50} color='secondary' /> : 'Entrar'} {/* conditionally render CircularProgress */}
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
      }
    </>
  );
}

export default SignIn