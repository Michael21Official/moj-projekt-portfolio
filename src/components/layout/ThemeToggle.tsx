import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '@/contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton
                onClick={toggleTheme}
                color="inherit"
                aria-label="toggle theme"
                size="medium"
            >
                {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
        </Tooltip>
    );
};