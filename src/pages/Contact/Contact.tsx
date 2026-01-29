import { useState } from 'react';
import {
    Typography,
    Box,
    TextField,
    Button,
    Paper,
    Alert,
    Snackbar
} from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import './Contact.less';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSnackbar({ open: true, message: 'Message sent successfully! I will contact you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box className="contact-page">
            <Typography variant="h2" gutterBottom textAlign="center">
                Get In Touch
            </Typography>

            <Typography variant="body1" color="text.secondary" textAlign="center" mb={6}>
                Feel free to contact me for any questions or opportunities
            </Typography>

            {/* Używamy Box z flex zamiast Grid */}
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
                                href="https://github.com/yourusername"
                                target="_blank"
                                sx={{ mr: 2 }}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
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

                        <form onSubmit={handleSubmit}>
                            {/* Form fields w Box zamiast Grid */}
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
                                        startIcon={<Send />}
                                    >
                                        Send Message
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
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;