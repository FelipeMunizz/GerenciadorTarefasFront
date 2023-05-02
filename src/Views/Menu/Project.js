import React, { useState, useEffect } from 'react';
import axiosConfig from '../../Config/axiosConfig';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const Project = () => {
  const [projects, setProjects] = useState([]);

  const item = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig.get('Projetos/ListarProjetos');
      setProjects(result.data);
      console.log(result)
    };
    fetchData();
  }, []);

  return (
    <Box sx={item}>
      <TableContainer component={Paper} >
        <Table aria-label="projetos">
          <TableHead>
            <TableRow>
              <TableCell>ID do Usuário</TableCell>
              <TableCell>Nome do Projeto</TableCell>
              <TableCell>Descrição do Projeto</TableCell>
              <TableCell>Data Inicio do Projeto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.idProjeto}>
                <TableCell>{project.idProjeto}</TableCell>
                <TableCell>{project.nomeProjeto}</TableCell>
                <TableCell>{project.descricao}</TableCell>
                <TableCell>{project.dataInicio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Project;