// src/components/layout/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';
import './MainLayout.less';

export const MainLayout = () => {
    return (
        <Box className="layout-container">
            <Header />
            <Box component="main" className="main-content">
                {/* Container TYLKO tutaj - to DOBRA PRAKTYKA */}
                <Container maxWidth="lg" className="content-container">
                    <Outlet />
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};