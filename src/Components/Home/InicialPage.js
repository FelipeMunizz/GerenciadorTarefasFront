import { Box, Button, Typography } from "@mui/material";

export default function InicialPage() {
    return (
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
                color: '#ff6f9c',
                mb: 5,
                padding: 1.2,
                borderRadius: 2.3,
                textShadow: '2px 2px #fff, -2px -2px #fff, 2px -2px  #fff, -2px 2px  #fff'
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
    );
}