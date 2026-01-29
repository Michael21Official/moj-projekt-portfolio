// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '@/themes/muiTheme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const getInitialMode = (): ThemeMode => {
        const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
        if (savedMode) return savedMode;

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    };

    const [mode, setMode] = useState<ThemeMode>(getInitialMode);

    // Tworzymy theme z odpowiednim mode
    const theme = getTheme(mode);

    // Dodajemy data attribute do body
    useEffect(() => {
        document.body.setAttribute('data-mui-color-scheme', mode);

        // Dodajemy też do html element dla pewności
        document.documentElement.setAttribute('data-mui-color-scheme', mode);

        // Zapisz preferencję
        localStorage.setItem('theme-mode', mode);
    }, [mode]);

    // Słuchaj zmian w systemowym theme
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme-mode')) {
                setMode(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const value = {
        mode,
        toggleTheme,
        setMode,
    };

    return (
        <ThemeContext.Provider value={value}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within ThemeProvider');
    }
    return context;
};