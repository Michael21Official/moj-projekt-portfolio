import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Link,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './Footer.less';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" className="footer">
            <Container maxWidth="lg">
                <Box display="flex" flexWrap="wrap" gap={4} mb={4}>
                    <Box flex={{ xs: '1 1 100%', md: '1 1 48%' }}>
                        <Typography variant="h6" gutterBottom className="footer-title">
                            Michał Matsalak
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Software Engineer & Full Stack Developer passionate about creating
                            exceptional digital experiences with modern technologies.
                        </Typography>
                    </Box>

                    <Box flex={{ xs: '1 1 100%', md: '1 1 48%' }}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box className="footer-links">
                            <Link href="/" color="inherit" underline="hover">Home</Link>
                            <Link href="/about" color="inherit" underline="hover">About</Link>
                            <Link href="/projects" color="inherit" underline="hover">Projects</Link>
                            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
                        </Box>
                    </Box>
                </Box>

                <Box className="footer-bottom">
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} Michał Matsalak. All rights reserved.
                    </Typography>

                    <Box className="social-icons">
                        <IconButton
                            aria-label="GitHub"
                            href="https://github.com/yourusername"
                            target="_blank"
                            size="small"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            size="small"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            aria-label="Email"
                            href="mailto:matsalakmichal@gmail.com"
                            size="small"
                        >
                            <Email />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};