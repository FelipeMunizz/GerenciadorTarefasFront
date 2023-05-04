import { Grid, Card, CardContent, Typography } from "@mui/material";

function ProjectsCards({ projects }) {
    return (
        <Grid container spacing={2} style={{ padding: 25 }}>
            {projects.map((project) => (
                <Grid item xs={12} md={15} lg={4} key={project.idProjeto}>
                    <Card>
                        <CardContent sx={{ height: 100, overflow: 'hidden' }}>
                            <Typography variant="h5" component="h2">
                                {project.nomeProjeto}
                            </Typography>
                            <Typography color="textSecondary">
                                {project.descricao}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
export default ProjectsCards