import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'

const Login = () => {
    return (
        <>
            <Box sx={{ margin: 0, height: '100%', width: '100%', backgroundColor: '#3498db', display: 'flex', alignItems: 'center' }}>
                <Container sx={{ backgroundColor: '#fff', borderRadius: 10, height: 600, padding: 5 }} maxWidth="sm">
                    <Box sx={{ bgcolor: '#dfdfdf', height: '100%', width: '100%' }} >
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Login;