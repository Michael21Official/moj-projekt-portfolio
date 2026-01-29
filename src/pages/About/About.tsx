import { Box, Typography, Paper } from '@mui/material';
import './About.less';

const About = () => {
    return (
        <Box className="about-page">
            <Typography variant="h2" gutterBottom>
                About Me
            </Typography>

            <Paper elevation={2} className="profile-section" sx={{ p: 3, mb: 4 }}>
                <Typography variant="h5" gutterBottom color="primary">
                    Professional Profile
                </Typography>
                <Typography variant="body1" paragraph>
                    I am a Software Engineer and a student at the National Education Commission University in Krakow,
                    majoring in Technical and IT Education. I have a broad range of interests, which led me to pursue
                    a career as a Full Stack Developer. I am eager to take on new challenges and am committed to
                    continuously expanding my knowledge and skills in both front-end and back-end technologies.
                </Typography>
            </Paper>

            {/* Używamy Box z flex zamiast Grid */}
            <Box display="flex" flexWrap="wrap" gap={4} mb={4}>
                <Box flex={{ xs: '1 1 100%', md: '1 1 48%' }}>
                    <Paper elevation={2} className="education-section" sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h5" gutterBottom color="primary">
                            Education
                        </Typography>

                        <Box mt={2}>
                            <Typography variant="h6" fontWeight={600}>
                                University of the National Education Commission
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Master's Degree | 2024 - 2025
                            </Typography>
                            <Typography variant="body1">
                                Field of Study: Technical and IT Education
                            </Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6" fontWeight={600}>
                                Cracow University of Technology
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Bachelor's Degree in Engineering | 2020 - 2024
                            </Typography>
                            <Typography variant="body1">
                                Field of Study: Applied Computer Science
                            </Typography>
                        </Box>
                    </Paper>
                </Box>

                <Box flex={{ xs: '1 1 100%', md: '1 1 48%' }}>
                    <Paper elevation={2} className="certificates-section" sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h5" gutterBottom color="primary">
                            Certificates
                        </Typography>

                        <Box mt={2}>
                            <Typography variant="h6" fontWeight={600}>
                                Spring Framework
                            </Typography>
                            <Typography variant="body2" color="text.secondary">Udemy</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6" fontWeight={600}>
                                Podstawy marketingu Internetowego
                            </Typography>
                            <Typography variant="body2" color="text.secondary">Google</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6" fontWeight={600}>
                                TELC B2 Certificate
                            </Typography>
                            <Typography variant="body2" color="text.secondary">SJO</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>

            {/* Work Experience Section */}
            <Box mt={4}>
                <Typography variant="h4" gutterBottom color="primary">
                    Work Experience
                </Typography>

                <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Sabre Poland, Krakow - Software Developer I
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        07.2023 - Current
                    </Typography>
                    <Typography variant="body1" component="div">
                        <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                            <li>Design and development of microservices</li>
                            <li>Implementation and maintenance of backend microservices</li>
                            <li>Working with React technology and TypeScript</li>
                            <li>Styling with LESS</li>
                            <li>Project management in Kanban methodology</li>
                        </ul>
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default About;