import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Link,
    Avatar,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './Footer.less';

import logo from '@assets/images/logo.png';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" className="footer">
            <Container maxWidth="lg">
                <Box display="flex" flexWrap="wrap" gap={4} mb={4}>
                    <Box flex={{ xs: '1 1 100%', md: '1 1 48%' }}>
                        <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                            <Avatar
                                src={logo}
                                alt="Michał Matsalak"
                                variant="rounded"
                                onError={() => console.log('Logo failed to load:', logo)}
                                imgProps={{
                                    onError: () => console.log('Image failed to load')
                                }}
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: '10px',
                                    border: '2px solid',
                                    borderColor: 'primary.main',
                                    backgroundColor: 'white',
                                    boxShadow: 2,
                                    '& img': {
                                        objectFit: 'contain',
                                        padding: '6px'
                                    }
                                }}
                            >
                                <Typography variant="h6">MM</Typography>
                            </Avatar>
                            <Box>
                                <Typography variant="h6" className="footer-title">
                                    Michał Matsalak
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Software Engineer
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Software Engineer with 2+ years of experience in full-stack development.
                            Specializing in Java, Spring Boot, React, and TypeScript.
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
                            href="https://github.com/Michael21Official"
                            target="_blank"
                            size="small"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/micha%C5%82-matsalak-25123a22b/"
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