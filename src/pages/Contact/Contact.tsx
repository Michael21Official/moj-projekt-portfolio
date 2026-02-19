import { useState, useRef } from 'react';
import {
    Typography,
    Box,
    TextField,
    Button,
    Paper,
    Alert,
    Snackbar,
    CircularProgress,
} from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { trackContact, trackSocialClick } from '../../analytics/ga4'; // 👈 Dodaj import
import './Contact.less';

// === KONFIGURACJA EMAILJS ===
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ME = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ME;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        trackContact('form'); // 👈 Śledź wysłanie formularza

        if (!formRef.current) {
            console.error('Form ref is null');
            return;
        }

        // Sprawdź czy klucze są skonfigurowane
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_ME || !EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS keys are not configured');
            setSnackbar({
                open: true,
                message: 'Configuration error. Please try again later.',
                severity: 'error'
            });
            return;
        }

        setIsSending(true);

        try {
            // === 1. Wyślij wiadomość do Ciebie ===
            console.log('Sending email to you...');
            const result1 = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID_ME,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            console.log('Email to you sent:', result1.text);

            // === 2. Wyślij auto-reply do nadawcy ===
            if (EMAILJS_TEMPLATE_ID_USER) {
                console.log('Sending auto-reply to user...');
                const result2 = await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID_USER,
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        time: new Date().toLocaleString('pl-PL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        }),
                    },
                    EMAILJS_PUBLIC_KEY
                );
                console.log('Auto-reply sent:', result2.text);
            }

            // Sukces
            setSnackbar({
                open: true,
                message: 'Message sent successfully! Check your email for confirmation.',
                severity: 'success'
            });

            // Wyczyść formularz
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Email error details:', error);

            let errorMessage = 'Failed to send message. Please try again later.';

            // Sprawdź konkretny błąd
            if (error instanceof Error) {
                if (error.message.includes('service')) {
                    errorMessage = 'Invalid service configuration. Check EmailJS Service ID.';
                } else if (error.message.includes('template')) {
                    errorMessage = 'Invalid template configuration. Check EmailJS Template ID.';
                } else if (error.message.includes('key') || error.message.includes('public')) {
                    errorMessage = 'Invalid API key. Check EmailJS Public Key.';
                } else if (error.message.includes('network')) {
                    errorMessage = 'Network error. Check your internet connection.';
                }
            }

            setSnackbar({
                open: true,
                message: errorMessage,
                severity: 'error'
            });
        } finally {
            setIsSending(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleSocialClick = (platform: 'github' | 'linkedin') => {
        trackSocialClick(platform); // 👈 Śledź kliknięcia social media
    };

    return (
        <Box className="contact-page">
            <Typography variant="h2" gutterBottom textAlign="center">
                Get In Touch
            </Typography>

            <Typography variant="body1" color="text.secondary" textAlign="center" mb={6}>
                Feel free to contact me for any questions or opportunities
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={4} mb={4}>
                {/* Contact Info */}
                <Box flex={{ xs: '1 1 100%', md: '1 1 40%' }}>
                    <Paper elevation={2} className="contact-info-card" sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h5" gutterBottom color="primary">
                            Contact Information
                        </Typography>

                        <Box className="contact-item" mt={3}>
                            <Email color="primary" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" fontWeight={600}>Email</Typography>
                                <Typography variant="body1">matsalakmichal@gmail.com</Typography>
                            </Box>
                        </Box>

                        <Box className="contact-item" mt={3}>
                            <Phone color="primary" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" fontWeight={600}>Phone</Typography>
                                <Typography variant="body1">(+48) 578 742 682</Typography>
                            </Box>
                        </Box>

                        <Box className="contact-item" mt={3}>
                            <LocationOn color="primary" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" fontWeight={600}>Location</Typography>
                                <Typography variant="body1">Krakow, Poland</Typography>
                            </Box>
                        </Box>

                        <Box className="social-links" mt={4}>
                            <Button
                                variant="outlined"
                                href="https://github.com/Michael21Official"
                                target="_blank"
                                onClick={() => handleSocialClick('github')} // 👈 Dodaj onClick
                                sx={{ mr: 2 }}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                href="https://www.linkedin.com/in/micha%C5%82-matsalak-25123a22b/"
                                target="_blank"
                                onClick={() => handleSocialClick('linkedin')} // 👈 Dodaj onClick
                            >
                                LinkedIn
                            </Button>
                        </Box>
                    </Paper>
                </Box>

                {/* Contact Form */}
                <Box flex={{ xs: '1 1 100%', md: '1 1 55%' }}>
                    <Paper elevation={2} className="contact-form-card" sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom color="primary">
                            Send Me a Message
                        </Typography>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            {/* Ukryte pole dla EmailJS (data wysłania) */}
                            <input
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString()}
                            />

                            <Box display="flex" flexWrap="wrap" gap={3}>
                                <Box flex={{ xs: '1 1 100%', sm: '1 1 48%' }}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Box>
                                <Box flex={{ xs: '1 1 100%', sm: '1 1 48%' }}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Box>
                                <Box flex="1 1 100%">
                                    <TextField
                                        fullWidth
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Box>
                                <Box flex="1 1 100%">
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        name="message"
                                        multiline
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Box>
                                <Box flex="1 1 100%">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        startIcon={isSending ? <CircularProgress size={20} color="inherit" /> : <Send />}
                                        disabled={isSending}
                                    >
                                        {isSending ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </Paper>
                </Box>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;