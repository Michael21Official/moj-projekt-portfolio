import { createTheme } from '@mui/material/styles';

// Rozszerz palette type dla custom colors
declare module '@mui/material/styles' {
    interface Palette {
        custom?: {
            light?: string;
            main: string;
            dark?: string;
            contrastText?: string;
        };
    }
    interface PaletteOptions {
        custom?: {
            light?: string;
            main: string;
            dark?: string;
            contrastText?: string;
        };
    }
}

// Tworzymy theme który wspiera light i dark mode
export const getTheme = (mode: 'light' | 'dark' = 'light') => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'light' ? '#1976d2' : '#90caf9',
                light: mode === 'light' ? '#42a5f5' : '#bbdefb',
                dark: mode === 'light' ? '#1565c0' : '#64b5f6',
            },
            secondary: {
                main: mode === 'light' ? '#dc004e' : '#f48fb1',
                light: mode === 'light' ? '#ff4081' : '#ffc1e3',
                dark: mode === 'light' ? '#9a0036' : '#bf5f82',
            },
            background: {
                default: mode === 'light' ? '#f8f9fa' : '#121212',
                paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
            },
            text: {
                primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 700,
                fontSize: '3.5rem',
                [`@media (max-width: 900px)`]: {
                    fontSize: '2.5rem',
                },
                [`@media (max-width: 600px)`]: {
                    fontSize: '2rem',
                },
            },
            h2: {
                fontWeight: 600,
                fontSize: '2.75rem',
                [`@media (max-width: 900px)`]: {
                    fontSize: '2.25rem',
                },
                [`@media (max-width: 600px)`]: {
                    fontSize: '1.75rem',
                },
            },
            h3: {
                fontWeight: 600,
                fontSize: '2.25rem',
            },
            body1: {
                fontSize: '1rem',
                lineHeight: 1.6,
            },
        },
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: 'background-color 0.3s ease',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 600,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
                        color: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                        transition: 'background-color 0.3s ease',
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        '@media (min-width: 600px)': {
                            paddingLeft: '24px',
                            paddingRight: '24px',
                        },
                        '@media (min-width: 1200px)': {
                            paddingLeft: '32px',
                            paddingRight: '32px',
                        },
                    },
                },
            },
        },
    });
};

// Domyślny theme (light)
export const theme = getTheme('light');