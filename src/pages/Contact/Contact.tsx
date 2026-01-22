import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    TextField,
    Button,
    Paper,
    Alert,
    Snackbar,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
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
        // Tutaj dodaj logikę wysyłania formularza
        console.log('Form submitted:', formData);
        setSnackbar({ open: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Container maxWidth="lg">
            <Box className="contact-page">
                <Typography variant="h2" gutterBottom textAlign="center">
                    Get In Touch
                </Typography>

                <Typography variant="body1" color="text.secondary" textAlign="center" mb={6}>
                    Feel free to contact me for any questions or opportunities
                </Typography>

                <Grid container spacing={6}>
                    {/* Contact Info */}
                    <Grid item xs={12} md={5}>
                        <Paper elevation={2} className="contact-info-card">
                            <Typography variant="h5" gutterBottom>
                                Contact Information
                            </Typography>

                            <Box className="contact-item" mt={3}>
                                <Email color="primary" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2">Email</Typography>
                                    <Typography variant="body1">matsalakmichal@gmail.com</Typography>
                                </Box>
                            </Box>

                            <Box className="contact-item" mt={3}>
                                <Phone color="primary" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2">Phone</Typography>
                                    <Typography variant="body1">(+48) 578 742 682</Typography>
                                </Box>
                            </Box>

                            <Box className="contact-item" mt={3}>
                                <LocationOn color="primary" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2">Location</Typography>
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
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} md={7}>
                        <Paper elevation={2} className="contact-form-card">
                            <Typography variant="h5" gutterBottom>
                                Send Me a Message
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            multiline
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;