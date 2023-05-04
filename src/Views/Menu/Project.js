import React, { useState, useEffect } from 'react';
import axiosConfig from '../../Config/axiosConfig';
import { Box, Grid, Button, Modal, TextField, Stack, Typography } from '@mui/material';
import ProjectsCards from '../../Components/CardProject';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(new FormData());

  const item = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleSaveProject = async () => {
    const result = await axiosConfig.post('Projetos/CriarProjeto', {
      nomeProjeto: formData.get('name'),
      descricao: formData.get('description')
    });
    setProjects([...projects, result.data]);
    setFormData(new FormData());
    handleCloseModal();
  }

  const handleInputChange = (event) => {
    formData.set(event.target.name, event.target.value);
    setFormData(formData);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig.get('Projetos/ListarProjetos');
      setProjects(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid item xs={12} md={8} sx={{display:'flex', paddingLeft: 4}}>
        <Button type="button" variant="contained" sx={{ mt: 4, mb: 2 }} onClick={handleOpenModal}>
          Adicionar Projeto
        </Button>
      </Grid>
      <Box sx={item}>
        <ProjectsCards projects={projects} />
      </Box>
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5">Adicionar Projeto</Typography>
            <TextField name="name" value={formData.get('name')} label="Nome do Projeto" fullWidth onChange={handleInputChange} />
            <TextField name="description" value={formData.get('description')} label="Descrição do Projeto" fullWidth onChange={handleInputChange} />
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button onClick={handleCloseModal}>Cancelar</Button>
              <Button onClick={handleSaveProject} variant="contained" color="primary">Salvar</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Project;