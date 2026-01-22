import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import './About.less';

const About = () => {
    return (
        <Container maxWidth="lg">
            <Box className="about-page">
                <Typography variant="h2" gutterBottom>
                    About Me
                </Typography>

                <Paper elevation={2} className="profile-section">
                    <Typography variant="h5" gutterBottom>
                        Professional Profile
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I am a Software Engineer and a student at the National Education Commission University in Krakow,
                        majoring in Technical and IT Education. I have a broad range of interests, which led me to pursue
                        a career as a Full Stack Developer. I am eager to take on new challenges and am committed to
                        continuously expanding my knowledge and skills in both front-end and back-end technologies.
                    </Typography>
                </Paper>

                <Grid container spacing={4} mt={4}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} className="education-section">
                            <Typography variant="h5" gutterBottom>
                                Education
                            </Typography>
                            <Box mt={2}>
                                <Typography variant="h6">University of the National Education Commission</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Master's Degree | 2024 - 2025
                                </Typography>
                                <Typography variant="body1" mt={1}>
                                    Field of Study: Technical and IT Education
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant="h6">Cracow University of Technology</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bachelor's Degree in Engineering | 2020 - 2024
                                </Typography>
                                <Typography variant="body1" mt={1}>
                                    Field of Study: Applied Computer Science
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} className="certificates-section">
                            <Typography variant="h5" gutterBottom>
                                Certificates
                            </Typography>
                            <Box mt={2}>
                                <Typography variant="h6">Spring Framework</Typography>
                                <Typography variant="body2" color="text.secondary">Udemy</Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography variant="h6">Podstawy marketingu Internetowego</Typography>
                                <Typography variant="body2" color="text.secondary">Google</Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography variant="h6">TELC B2 Certificate</Typography>
                                <Typography variant="body2" color="text.secondary">SJO</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default About;