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
                    {/* Nagłówek */}
                    <Box className="chat-header">
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

                    {/* Obszar wiadomości */}
                    <Box className="chat-messages">
                        {messages.length === 0 ? (
                            <Box className="chat-welcome">
                                <BotIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h6" gutterBottom>
                                    Witaj! 👋
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    Jestem asystentem Michała. Mogę odpowiedzieć na pytania dotyczące jego
                                    doświadczenia, umiejętności i projektów. W czym mogę pomóc?
                                </Typography>
                            </Box>
                        ) : (
                            messages.map((msg, index) => (
                                <Box
                                    key={index}
                                    className={`message ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}
                                >
                                    <Box className="message-avatar">
                                        <Avatar sx={{ bgcolor: msg.role === 'user' ? 'secondary.main' : 'primary.main' }}>
                                            {msg.role === 'user' ? <PersonIcon /> : <BotIcon />}
                                        </Avatar>
                                    </Box>
                                    <Box className="message-content">
                                        <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
                                            {msg.role === 'user' ? 'Ty' : 'Asystent'}
                                        </Typography>
                                        <ReactMarkdown>
                                            {msg.content}
                                        </ReactMarkdown>
                                    </Box>
                                </Box>
                            ))
                        )}

                        {isLoading && (
                            <Box className="message assistant-message">
                                <Box className="message-avatar">
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                        <BotIcon />
                                    </Avatar>
                                </Box>
                                <Box className="message-content">
                                    <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
                                        Asystent
                                    </Typography>
                                    <CircularProgress size={20} />
                                </Box>
                            </Box>
                        )}

                        {error && (
                            <Alert severity="error" sx={{ mx: 2, mb: 2 }}>
                                {error}
                            </Alert>
                        )}

                        <div ref={messagesEndRef} />
                    </Box>

                    {/* Formularz wysyłania */}
                    <Box component="form" onSubmit={handleSendMessage} className="chat-input">
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
                        />
                        <IconButton
                            type="submit"
                            color="primary"
                            disabled={!inputMessage.trim() || isLoading}
                        >
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};