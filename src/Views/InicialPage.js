import { Box, Button, Typography, Grid, Container, Link } from "@mui/material";

const InicialPage = () => {
    const item = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 5,
    };
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

    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    backgroundImage: 'url(https://i.pinimg.com/originals/64/c5/ab/64c5abfc7d9a997f4e11591fcd2c6fed.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h1" align="center" sx={{
                    color: '#fff',
                    mb: 5,
                    padding: 1.2,
                    borderRadius: 2.3,
                    textShadow: '2px 2px #ff6f9c, -2px -2px #ff6f9c, 2px -2px  #ff6f9c, -2px 2px  #ff6f9c'
                }}>
                    TASK MASTER
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{ color: '#fff', mb: 5, fontSize: 18 }}>
                    Bem-vindo(a) ao nosso Task Master!<br />
                    Com ele, você pode organizar sua rotina de forma eficiente <br />e nunca mais perder prazos importantes. <br />
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ mr: 2 }}>
                        <Button variant="contained" color="primary" href="/Login" sx={{ paddingLeft: 5, paddingRight: 5 }}>
                            Login
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" color="secondary" href="/Register">
                            Registrar
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                component="section"
                sx={{ display: 'flex', overflow: 'hidden' }}
            >
                <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <Box sx={item}>
                                <Typography variant="h5" sx={{ my: 5 }}>
                                </Typography>
                                <Typography variant="subtitle1">
                                    O Task Master é a solução perfeita para quem busca uma forma simples e eficiente de organizar suas atividades diárias. Com uma interface intuitiva e fácil de usar, você poderá criar, acompanhar e concluir suas tarefas de forma prática e rápida. Seja no trabalho ou em casa, com nosso sistema você nunca mais vai se perder em meio a tantas pendências. Experimente agora e sinta a diferença em sua produtividade!
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" sx={{ my: 5 }}>
                            </Typography>
                            <Box sx={item}>
                                <Box
                                    component="img"
                                    src="https://pluga.co/blog/wp-content/uploads/2022/06/sistema-de-gestao-de-tarefas.png"
                                    alt="suitcase"
                                    sx={{ height: 300 }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    );
}

export default InicialPage