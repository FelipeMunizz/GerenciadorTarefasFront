import React from 'react'
import { Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router'

const ProjetctMembers = () => {
  const navigate = useNavigate();
  function handleMembers(){
    navigate('/ProjectMembers')
  }
  return (
    <div>
      <Grid item xs={12} md={8}>
        <Button type="button" variant="contained" sx={{ mt: 4, mb: 2 }} onClick={handleMembers}>
          Adicionar Membros a Equipe do Projeto
        </Button>
      </Grid>
    </div>
  )
}

export default ProjetctMembers