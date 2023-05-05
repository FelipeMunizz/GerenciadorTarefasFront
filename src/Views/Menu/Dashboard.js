import { useEffect, useState } from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import axiosConfig from './../../Config/axiosConfig';
import jwt_decode from 'jwt-decode';
import ProjectsCards from '../../Components/CardProject';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [projects, setProjects] = useState([])
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig.get('Projetos/ListarProjetos');
      const sortedProjects = result.data.sort((a, b) => {
        return b.idProjeto - a.idProjeto;
      })
      setProjects(sortedProjects);
    };
    fetchData();
  }, []);

  const limitedProjects = projects.slice(0, 3)

  return (
    <>
      <Box
        component="section"
        sx={{ display: 'flex', overflow: 'hidden' }}
      >
        <Container sx={{ mt: 2, mb: 30, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={10}>
              <Box sx={item}>
                <Typography variant="h5" sx={{ my: 5 }}>
                  {user.nome} {user.sobrenome}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ display: 'flex', paddingLeft: 5 }} variant='subtitle1'>
                  Seus projetos mais recentes:
                </Typography>
                <ProjectsCards projects={limitedProjects} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export default Dashboard