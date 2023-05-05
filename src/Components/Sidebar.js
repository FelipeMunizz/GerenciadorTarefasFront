import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListSubheader, Typography, ListItemButton, ListItemIcon, Drawer, List, ListItemText } from '@mui/material';
import axiosConfig from '../Config/axiosConfig';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Desenvolvido por '}
      <Link color="inherit" href="https://felipemunizz.github.io/" target='_blank' style={{ textDecoration: 'none' }}>
        Felipe Muniz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

function handleLogout() {
  localStorage.removeItem('token');
  window.location.reload();
}

const StyledList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function Sidebar() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const decodedToken = jwt_decode(token)
  const idUsuario = decodedToken.idUsuario;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig.get('Usuarios/ObterUsuario/' + idUsuario);
      setUser(result.data);
    };
    fetchData();
  }, [idUsuario]);

  function handleDashboardClick() {
    navigate('/Dashboard');
  };

  function handleProjectClick() {
    navigate('/Project');
  };

  function handleProjectMembersClick() {
    navigate('/ProjetctMembers');
  };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        <ListItemButton onClick={handleDashboardClick} sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <DensitySmallIcon />
          </ListItemIcon>
          <ListItemText primary={user.nome + ' ' + user.sobrenome} />
        </ListItemButton>
        <ListItemButton onClick={handleDashboardClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={handleProjectClick}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Projetos" />
        </ListItemButton>
        <ListSubheader>
          <ListItemButton onClick={handleProjectMembersClick}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Equipe" />
          </ListItemButton>
        </ListSubheader>
      </List>
      <StyledList sx={{ marginTop: 'auto' }}>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <Copyright />
      </StyledList>
    </StyledDrawer>
  );
}

export default Sidebar;