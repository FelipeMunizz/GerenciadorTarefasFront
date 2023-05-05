import { useState } from 'react';
import { CircularProgress, Container, TextField, Link, Grid, Box, Avatar, Button, CssBaseline, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../../Config/axiosConfig';

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
const sxButton = { display: 'flex' }

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    setLoading(true)

    const info = new FormData(event.currentTarget);
    const data = {
      usuario: info.get('usuario'),
      email: info.get('email')
    }
    try {
      await axiosConfig.put('Usuarios/RedefinirSenha', data);
      setLoading(false);
      navigate('/Login')

    } catch (error) {

      setLoading(false)

    }
  };

  function handleInicial(){
    navigate('/')
  }

  return (
    <>
      <Button type='button' style={sxButton} onClick={handleInicial}>
        voltar
      </Button>
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
                Esqueceu a Senha
              </Typography>
              <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="usuario" label="Usuário" name="usuario" autoComplete="usuario" autoFocus />
                <TextField margin="normal" required fullWidth name="email" label="Email" type="email" id="email" autoComplete="email" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  {loading ? <CircularProgress size={50} color='secondary' /> : 'Enviar Senha'} {/* conditionally render CircularProgress */}
                </Button>
                <Grid container>
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

export default ForgotPassword