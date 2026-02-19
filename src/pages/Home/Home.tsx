import { Box, Typography, Button, Stack, Chip, Link } from '@mui/material';
import {
    ArrowForward,
    Email,
    GitHub,
    LinkedIn,
    LocationOn,
    Phone,
    School
} from '@mui/icons-material';
import { ProjectCard } from '@components/ui/ProjectCard';
import './Home.less';

// Importy log uczelni (załóżmy, że dodałeś je do assets)
import UKENLogo from '@assets/images/universities/uken_logo.png';
import PKLogo from '@assets/images/universities/pk_logo.png';

const skills = [
    'Java', 'Spring', 'React', 'TypeScript', 'JavaScript',
    'Node.js', 'API', 'HTML5', 'MySQL', 'React Testing Library',
    'JUnit', 'Git', 'Kanban'
];

const featuredProjects = [
    {
        id: 1,
        title: 'Sabre Poland - Software Engineer',
        description: 'Design and development of microservices using Java/Spring, React with TypeScript, and LESS for styling. Implemented scalable backend services with Kanban methodology.',
        technologies: ['Java', 'Spring', 'React', 'TypeScript', 'LESS', 'Microservices', 'Spring', 'Kanban'],
        githubUrl: undefined,
        liveUrl: 'https://www.sabre.com/locations/poland/',
    },
    {
        id: 2,
        title: 'Innovative Didactic Tool - 3D Simulations',
        description: 'The application combines advanced electromechanical phenomena simulations with interactive 3D visualizations using the Three.js library. It enables independent experimentation with machine parameters through an intuitive user interface.',
        technologies: ['Three.js', 'WebGL', '3D', 'Simulations', 'Interactivity'],
        githubUrl: 'https://github.com/Michael21Official/engines',
        liveUrl: 'https://michael21official.github.io/engines/',
    },
    {
        id: 3,
        title: 'Android Applications Development',
        description: 'Created applications for Android platform at WPP Capital, participating in design process and interface development.',
        technologies: ['Android', 'Node.js', 'API', 'MySQL'],
        githubUrl: undefined,
        liveUrl: undefined,
    },
];

const Home = () => {
    return (
        <Box className="home-page">
            {/* Hero Section */}
            <Box className="hero-section">
                <Typography variant="h1" className="hero-title">
                    Michał Matsalak
                </Typography>
                <Typography variant="h4" className="hero-subtitle">
                    Software Engineer | Full Stack Developer
                </Typography>
                <Typography variant="body1" className="hero-description">
                    Software Engineer and student at the National Education Commission University in Krakow.
                    Passionate Full Stack Developer with experience in Java, Spring, React, TypeScript, and modern web technologies.
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center" mt={3} flexWrap="wrap">
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<Email />}
                        href="mailto:matsalakmichal@gmail.com"
                    >
                        Contact Me
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<GitHub />}
                        href="https://github.com/Michael21Official"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<LinkedIn />}
                        href="https://www.linkedin.com/in/micha%C5%82-matsalak-25123a22b/"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                </Stack>
            </Box>

            {/* Quick Info Section - Ulepszona wersja */}
            <Box className="quick-info" mt={6}>
                <Box display="flex" flexWrap="wrap" gap={3}>
                    {/* Location Card */}
                    <Box flex={{ xs: '1 1 100%', sm: '1 1 30%' }}>
                        <Box className="info-card">
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <LocationOn color="primary" />
                                <Typography variant="h6">Location</Typography>
                            </Box>
                            <Typography variant="body1" fontWeight={500}>Krakow, Poland</Typography>
                            <Typography variant="body2" color="text.secondary" mt={1}>
                                🇵🇱 Available for remote work
                            </Typography>
                        </Box>
                    </Box>

                    {/* Contact Card */}
                    <Box flex={{ xs: '1 1 100%', sm: '1 1 30%' }}>
                        <Box className="info-card">
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <Phone color="primary" />
                                <Typography variant="h6">Contact</Typography>
                            </Box>
                            <Typography variant="body1" fontWeight={500}>+48 578 742 682</Typography>
                            <Link
                                href="mailto:matsalakmichal@gmail.com"
                                variant="body2"
                                color="primary"
                                sx={{ textDecoration: 'none', mt: 1, display: 'block' }}
                            >
                                matsakmichal@gmail.com
                            </Link>
                        </Box>
                    </Box>

                    {/* Education Card - Ulepszona z logami */}
                    <Box flex={{ xs: '1 1 100%', sm: '1 1 30%' }}>
                        <Box className="info-card">
                            <Box display="flex" alignItems="center" gap={1} mb={2}>
                                <School color="primary" />
                                <Typography variant="h6">Education</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                                <Box
                                    component="img"
                                    src={UKENLogo}
                                    alt="UKEN"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        objectFit: 'contain',
                                        borderRadius: '8px', // Zaokrąglone rogi
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        padding: '4px',
                                        backgroundColor: 'white'
                                    }}
                                />
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>
                                        National Education Commission University
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Master's • 2024-2025
                                    </Typography>
                                </Box>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1.5}>
                                <Box
                                    component="img"
                                    src={PKLogo}
                                    alt="PK"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        objectFit: 'contain',
                                        borderRadius: '8px', // Zaokrąglone rogi
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        padding: '4px',
                                        backgroundColor: 'white'
                                    }}
                                />
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>
                                        Cracow University of Technology
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Bachelor's • 2020-2024
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Skills Section */}
            <Box className="skills-section" mt={6}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    Technical Skills
                </Typography>
                <Box className="skills-container">
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            className="skill-chip"
                            variant="outlined"
                        />
                    ))}
                </Box>
            </Box>

            {/* Featured Projects */}
            <Box className="featured-projects" mt={6}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    Experience & Projects
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={3} mt={2}>
                    {featuredProjects.map((project) => (
                        <Box key={project.id} flex={{ xs: '1 1 100%', md: '1 1 48%', lg: '1 1 31%' }}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </Box>
                <Box textAlign="center" mt={4}>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForward />}
                        href="/projects"
                        size="large"
                    >
                        View All Projects
                    </Button>
                </Box>
            </Box>

            {/* Languages Section */}
            <Box className="languages-section" mt={6}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    Languages
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mt={2}>
                    <Box className="language-card">
                        <Typography variant="h5" className="language-flag">🇵🇱</Typography>
                        <Typography variant="h6">Polish</Typography>
                        <Typography variant="body2" color="text.secondary">Native</Typography>
                    </Box>
                    <Box className="language-card">
                        <Typography variant="h5" className="language-flag">🇬🇧</Typography>
                        <Typography variant="h6">English</Typography>
                        <Typography variant="body2" color="text.secondary">B2</Typography>
                    </Box>
                    <Box className="language-card">
                        <Typography variant="h5" className="language-flag">🇷🇺</Typography>
                        <Typography variant="h6">Russian</Typography>
                        <Typography variant="body2" color="text.secondary">C1</Typography>
                    </Box>
                    <Box className="language-card">
                        <Typography variant="h5" className="language-flag">🇺🇦</Typography>
                        <Typography variant="h6">Ukrainian</Typography>
                        <Typography variant="body2" color="text.secondary">Native</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;