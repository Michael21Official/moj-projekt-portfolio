import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import './Header.less';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Sprawdza czy ścieżka jest aktywna
    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    // Desktop navigation - Button zamiast NavLink dla lepszej kontroli
    const desktopNav = (
        <Box className="desktop-nav">
            {navItems.map((item) => (
                <Button
                    key={item.name}
                    component={NavLink}
                    to={item.path}
                    className={isActive(item.path) ? 'nav-link active' : 'nav-link'}
                    sx={{
                        color: 'text.primary',
                        fontWeight: isActive(item.path) ? 600 : 500,
                        textTransform: 'none',
                        fontSize: '1rem',
                        minWidth: 'auto',
                        px: 2,
                        position: 'relative',
                        '&::after': isActive(item.path) ? {
                            content: '""',
                            position: 'absolute',
                            bottom: -2,
                            left: 8,
                            right: 8,
                            height: 2,
                            backgroundColor: 'primary.main',
                            borderRadius: 1,
                        } : {},
                        '&:hover': {
                            backgroundColor: 'action.hover',
                            '&::after': isActive(item.path) ? {
                                backgroundColor: 'primary.dark',
                            } : {},
                        },
                    }}
                >
                    {item.name}
                </Button>
            ))}
        </Box>
    );

    // Mobile drawer
    const drawer = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                backgroundColor: 'background.paper',
            }}
            role="presentation"
            onClick={handleDrawerToggle}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.name}
                        component={NavLink}
                        to={item.path}
                        sx={{
                            textDecoration: 'none',
                            color: 'text.primary',
                            px: 3,
                            py: 1.5,
                            '&.active': {
                                backgroundColor: 'action.selected',
                                color: 'primary.main',
                                fontWeight: 600,
                            },
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                        className={isActive(item.path) ? 'active' : ''}
                    >
                        <ListItemText
                            primary={item.name}
                            primaryTypographyProps={{
                                fontWeight: isActive(item.path) ? 600 : 400,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3 } }}>
                {/* Logo */}
                <Typography
                    variant="h6"
                    component={NavLink}
                    to="/"
                    sx={{
                        fontWeight: 700,
                        textDecoration: 'none',
                        color: 'primary.main',
                        '&:hover': {
                            color: 'primary.dark',
                        },
                    }}
                >
                    Michał Matsalak
                </Typography>

                {/* Desktop Navigation + Theme Toggle */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {desktopNav}
                        <ThemeToggle />
                    </Box>
                )}

                {/* Mobile: Theme Toggle + Menu Button */}
                {isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ThemeToggle />
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'text.primary' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                )}
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 250,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};