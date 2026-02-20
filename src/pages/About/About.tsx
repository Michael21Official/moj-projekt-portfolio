import { Box, Typography, Paper, Chip, Stack } from '@mui/material';
import './About.less';

const skills = {
    frontend: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'React Testing Library'],
    backend: ['Java', 'Spring Boot', 'REST API', 'Node.js', 'MySQL', 'JUnit'],
    devops: ['AWS', 'CI/CD'],
    tools: ['Git', 'Scrum', 'Kanban', 'Figma', 'Maven'],
    additional: ['Google Analytics', 'PageSpeed Insights', 'EmailJS']
};

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
                    Software Engineer with 2+ years of professional experience in full-stack development.
                    Core competencies include building front-end applications with TypeScript and React,
                    and developing robust back-end services using Java and Spring Boot. Proficient in
                    essential tools like Maven and Git. Currently contributing to high-impact projects
                    in the travel technology sector at Sabre Poland.
                </Typography>

                <Typography variant="body1" paragraph sx={{ mt: 2, fontWeight: 500, color: 'primary.main' }}>
                    Advantages:
                </Typography>
                <Typography variant="body2" component="div" sx={{ pl: 2 }}>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                        <li>Proven ability to develop and maintain mission-critical software in a global, agile environment (Sabre)</li>
                        <li>Hands-on experience with the entire software development lifecycle, from design and coding to CI/CD and deployment</li>
                        <li>Strong foundation in both front-end and back-end technologies, enabling effective contribution across the entire stack</li>
                    </ul>
                </Typography>

                <Typography variant="body1" paragraph sx={{ mt: 3, fontWeight: 500, color: 'primary.main' }}>
                    Ambitions:
                </Typography>
                <Typography variant="body2" component="div" sx={{ pl: 2 }}>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                        <li>Seeking to leverage my full-stack skills in a challenging product team to build scalable, world-class digital applications</li>
                        <li>Eager to deepen expertise in modern architecture patterns and emerging technologies within a collaborative, innovative environment</li>
                        <li>Aiming to take an active role in the technical direction of projects</li>
                    </ul>
                </Typography>
            </Paper>

            {/* Skills Section */}
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
                    Technical Skills
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" color="primary" gutterBottom>Frontend</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {skills.frontend.map((skill, index) => (
                            <Chip key={index} label={skill} size="small" variant="outlined" />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" color="primary" gutterBottom>Backend</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {skills.backend.map((skill, index) => (
                            <Chip key={index} label={skill} size="small" variant="outlined" />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" color="primary" gutterBottom>DevOps & Cloud</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {skills.devops.map((skill, index) => (
                            <Chip key={index} label={skill} size="small" variant="outlined" />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" color="primary" gutterBottom>Tools & Workflow</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {skills.tools.map((skill, index) => (
                            <Chip key={index} label={skill} size="small" variant="outlined" />
                        ))}
                    </Stack>
                </Box>

                <Box>
                    <Typography variant="h6" color="primary" gutterBottom>Additional Skills</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {skills.additional.map((skill, index) => (
                            <Chip key={index} label={skill} size="small" variant="outlined" />
                        ))}
                    </Stack>
                </Box>
            </Paper>

            {/* Education & Certificates */}
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
                                Mikroserwisy z Spring Cloud - tworzenie aplikacji webowych
                            </Typography>
                            <Typography variant="body2" color="text.secondary">Udemy</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6" fontWeight={600}>
                                Podstawy marketingu internetowego
                            </Typography>
                            <Typography variant="body2" color="text.secondary">Google</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6" fontWeight={600}>
                                TELC B2 Certificate
                            </Typography>
                            <Typography variant="body2" color="text.secondary">SJO</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6" fontWeight={600}>
                                AI jako twój partner w karierze
                            </Typography>
                            <Typography variant="body2" color="text.secondary">Microsoft</Typography>
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
                            <li>Design and development of microservices - Implementation and maintenance of backend microservices, ensuring system scalability and flexibility</li>
                            <li>Working with React technology - Creating and optimizing user interfaces using React, and integrating with backend microservices</li>
                            <li>Programming in TypeScript - Developing applications using TypeScript, enhancing code safety and readability</li>
                            <li>Styling with LESS - Using LESS to create and manage advanced style sheets</li>
                            <li>Project management in the Kanban methodology - Organization and prioritization of tasks using Kanban boards</li>
                        </ul>
                    </Typography>
                </Paper>

                <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Computer Alliance, Krakow - Web Administrator
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        06.2021 - 08.2021
                    </Typography>
                    <Typography variant="body1" component="div">
                        <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                            <li>E-commerce platform management (Shopper)</li>
                            <li>Shaping the application architecture</li>
                        </ul>
                    </Typography>
                </Paper>

                <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        WWP Capital, Krakow - Developer
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        07.2019 - 12.2019
                    </Typography>
                    <Typography variant="body1" component="div">
                        <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                            <li>Creating applications for the Android platform</li>
                            <li>Participating in the application design process and advanced interfaces</li>
                            <li>Active cooperation with other front-end and back-end departments of the company</li>
                        </ul>
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default About;