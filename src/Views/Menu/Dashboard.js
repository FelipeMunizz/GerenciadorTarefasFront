import { useEffect, useState } from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import axiosConfig from './../../Config/axiosConfig';
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem('token')
  const decodedToken = jwt_decode(token)
  const idUsuario = decodedToken.idUsuario;

  const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig.get('Usuarios/ObterUsuario/' + idUsuario);
      setUser(result.data);
      console.log(result)
    };
    fetchData();
  }, [idUsuario]);

  function handleMembers(){

  }

  return (
    <>
      <Box
        component="section"
        sx={{ display: 'flex', overflow: 'hidden' }}
      >
        <Container sx={{ mt: 2, mb: 30, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Typography variant="h5" sx={{ my: 5 }}>
                  {user.nome} {user.sobrenome}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Button type="button" variant="contained" sx={{ mt: 4, mb: 2 }} onClick={handleMembers}>
                Adicionar Membros a Equipe
              </Button>
              <Box sx={item}>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export default Dashboard