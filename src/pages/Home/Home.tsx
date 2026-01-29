import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import { ArrowForward, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { ProjectCard } from '@components/ui/ProjectCard';
import './Home.less';

const skills = [
    'Java', 'Spring', 'React', 'TypeScript', 'JavaScript',
    'Node.js', 'API', 'HTML5', 'MySQL', 'React Testing Library',
    'JUnit', 'Git', 'Kanban'
];

const featuredProjects = [
    {
        id: 1,
        title: 'Sabre Poland - Microservices Development',
        description: 'Design and development of microservices using Java/Spring, React with TypeScript, and LESS for styling. Implemented scalable backend services with Kanban methodology.',
        technologies: ['Java', 'Spring', 'React', 'TypeScript', 'LESS', 'Microservices'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 2,
        title: 'E-commerce Platform Management',
        description: 'Managed e-commerce platform (Shopper) at Computer Alliance, shaping application architecture and user interfaces.',
        technologies: ['React', 'JavaScript', 'E-commerce', 'Architecture'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 3,
        title: 'Android Applications Development',
        description: 'Created applications for Android platform at WPP Capital, participating in design process and interface development.',
        technologies: ['Android', 'Node.js', 'API', 'MySQL'],
        githubUrl: '#',
        liveUrl: '#',
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
                        href="https://github.com/yourusername"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<LinkedIn />}
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                </Stack>
            </Box>

            {/* Quick Info Section - Box zamiast Grid */}
            <Box className="quick-info" mt={6}>
                <Box display="flex" flexWrap="wrap" gap={3}>
                    <Box flex={{ xs: '1 1 100%', sm: '1 1 30%' }}>
                        <Box className="info-card">
                            <Typography variant="h6" gutterBottom>📍 Location</Typography>
                            <Typography variant="body1">Krakow, Poland</Typography>
                        </Box>
                    </Box>
                    <Box flex={{ xs: '1 1 100%', sm: '1 1 30%' }}>
                        <Box className="info-card">
                            <Typography variant="h6" gutterBottom>📞 Contact</Typography>
                            <Typography variant="body1">(+48) 578 742 682</Typography>
                        </Box>
                    </Box>
                    <Box flex={{ xs: '1 1 100%', sm: '1 1 30%' }}>
                        <Box className="info-card">
                            <Typography variant="h6" gutterBottom>🎓 Education</Typography>
                            <Typography variant="body1">Master's Degree in Technical and IT Education (2024-2025)</Typography>
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

            {/* Featured Projects - Box zamiast Grid */}
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

            {/* Languages Section - Box zamiast Grid */}
            <Box className="languages-section" mt={6}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    Languages
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mt={2}>
                    <Box>
                        <Box className="language-card">
                            <Typography variant="h6">Polish</Typography>
                            <Typography variant="body2" color="text.secondary">Native</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="language-card">
                            <Typography variant="h6">English</Typography>
                            <Typography variant="body2" color="text.secondary">B2</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="language-card">
                            <Typography variant="h6">Russian</Typography>
                            <Typography variant="body2" color="text.secondary">C1</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="language-card">
                            <Typography variant="h6">Ukrainian</Typography>
                            <Typography variant="body2" color="text.secondary">Native</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;