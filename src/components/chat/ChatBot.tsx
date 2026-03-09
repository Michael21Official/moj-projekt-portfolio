import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    IconButton,
    Avatar,
    CircularProgress,
    Fab,
    Drawer,
    useTheme,
    useMediaQuery,
    Alert,
} from '@mui/material';
import {
    SmartToy as BotIcon,
    Person as PersonIcon,
    Send as SendIcon,
    Close as CloseIcon,
    Chat as ChatIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import { useGemini } from '../../hooks/chat/useGemini';
import './ChatBot.less';

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { messages, isLoading, error, sendMessage, clearChat } = useGemini();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading) return;

        const message = inputMessage.trim();
        setInputMessage('');
        await sendMessage(message);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    };

    return (
        <>
            {/* Przycisk otwierający czat */}
            <Fab
                color="primary"
                aria-label="chat"
                onClick={() => setIsOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1000,
                }}
            >
                <ChatIcon />
            </Fab>

            {/* Drawer z czatem */}
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: isMobile ? '100%' : 400,
                        maxWidth: '100%',
                        height: '100vh',
                    },
                }}
            >
                <Box className="chat-container">
                    {/* Nagłówek - Paper z cieniem */}
                    <Paper
                        elevation={2}
                        square
                        sx={{
                            p: 2,
                            borderRadius: 0,
                            borderBottom: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper'
                        }}
                    >
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" alignItems="center" gap={1}>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>
                                    <BotIcon />
                                </Avatar>
                                <Typography variant="h6">Asystent Michała</Typography>
                            </Box>
                            <Box>
                                <IconButton onClick={clearChat} size="small" sx={{ mr: 1 }}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => setIsOpen(false)} size="small">
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Paper>

                    {/* Obszar wiadomości */}
                    <Box className="chat-messages" sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
                        {messages.length === 0 ? (
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    bgcolor: 'background.default',
                                    borderRadius: 2
                                }}
                            >
                                <BotIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h6" gutterBottom>
                                    Witaj! 👋
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Jestem asystentem Michała. Mogę odpowiedzieć na pytania dotyczące jego
                                    doświadczenia, umiejętności i projektów. W czym mogę pomóc?
                                </Typography>
                            </Paper>
                        ) : (
                            messages.map((msg, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                        mb: 2
                                    }}
                                >
                                    <Box sx={{ display: 'flex', maxWidth: '80%', gap: 1 }}>
                                        {msg.role === 'assistant' && (
                                            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                                                <BotIcon fontSize="small" />
                                            </Avatar>
                                        )}
                                        <Paper
                                            elevation={1}
                                            sx={{
                                                p: 1.5,
                                                bgcolor: msg.role === 'user' ? 'primary.main' : 'background.default',
                                                color: msg.role === 'user' ? 'white' : 'text.primary',
                                                borderRadius: msg.role === 'user'
                                                    ? '18px 18px 4px 18px'
                                                    : '18px 18px 18px 4px',
                                            }}
                                        >
                                            <Typography variant="caption" display="block" sx={{ opacity: 0.8, mb: 0.5 }}>
                                                {msg.role === 'user' ? 'Ty' : 'Asystent'}
                                            </Typography>
                                            <ReactMarkdown>
                                                {msg.content}
                                            </ReactMarkdown>
                                        </Paper>
                                        {msg.role === 'user' && (
                                            <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                                                <PersonIcon fontSize="small" />
                                            </Avatar>
                                        )}
                                    </Box>
                                </Box>
                            ))
                        )}

                        {isLoading && (
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                                        <BotIcon fontSize="small" />
                                    </Avatar>
                                    <Paper
                                        elevation={1}
                                        sx={{
                                            p: 1.5,
                                            bgcolor: 'background.default',
                                            borderRadius: '18px 18px 18px 4px',
                                        }}
                                    >
                                        <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                                            Asystent
                                        </Typography>
                                        <CircularProgress size={20} />
                                    </Paper>
                                </Box>
                            </Box>
                        )}

                        {error && (
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 2,
                                    bgcolor: 'error.light',
                                    color: 'error.contrastText',
                                    borderRadius: 2,
                                    mb: 2
                                }}
                            >
                                <Typography variant="body2">{error}</Typography>
                            </Paper>
                        )}

                        <div ref={messagesEndRef} />
                    </Box>

                    {/* Formularz wysyłania - Paper na dole */}
                    <Paper
                        elevation={3}
                        square
                        sx={{
                            p: 2,
                            borderTop: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper'
                        }}
                    >
                        <Box component="form" onSubmit={handleSendMessage} sx={{ display: 'flex', gap: 1 }}>
                            <TextField
                                fullWidth
                                placeholder="Wpisz wiadomość..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                disabled={isLoading}
                                multiline
                                maxRows={4}
                                variant="outlined"
                                size="small"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 3,
                                    }
                                }}
                            />
                            <IconButton
                                type="submit"
                                color="primary"
                                disabled={!inputMessage.trim() || isLoading}
                                sx={{
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                    '&.Mui-disabled': {
                                        bgcolor: 'action.disabledBackground',
                                    },
                                    width: 48,
                                    height: 48,
                                }}
                            >
                                <SendIcon />
                            </IconButton>
                        </Box>
                    </Paper>
                </Box>
            </Drawer>
        </>
    );
};