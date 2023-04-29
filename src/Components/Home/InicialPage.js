import { Box, Button } from "@mui/material";

export default function InicialPage() {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: 'url(https://i.pinimg.com/originals/64/c5/ab/64c5abfc7d9a997f4e11591fcd2c6fed.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ mr: 2 }}>
                <Button variant="contained" color="primary" href="/Login" sx={{paddingLeft: 5, paddingRight:5}}>
                    Login
                </Button>
            </Box>
            <Box>
                <Button variant="contained" color="secondary" href="/Register">
                    Registrar
                </Button>
            </Box>
        </Box>
    );
}