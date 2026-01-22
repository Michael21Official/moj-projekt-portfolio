import { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    Chip,
    Box,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { ProjectCard } from '@components/ui/ProjectCard';
import './Projects.less';

// Rozszerzone dane projektów
const allProjects = [
    {
        id: 1,
        title: 'Sabre Poland - Microservices Development',
        description: 'Design and development of microservices using Java/Spring, React with TypeScript, and LESS for styling.',
        technologies: ['Java', 'Spring', 'React', 'TypeScript', 'LESS', 'Microservices', 'Kanban'],
        category: 'Professional',
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 2,
        title: 'E-commerce Platform Management',
        description: 'Managed e-commerce platform (Shopper) at Computer Alliance, shaping application architecture.',
        technologies: ['React', 'JavaScript', 'E-commerce', 'Architecture'],
        category: 'Professional',
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 3,
        title: 'Android Applications Development',
        description: 'Created applications for Android platform at WPP Capital.',
        technologies: ['Android', 'Node.js', 'API', 'MySQL'],
        category: 'Professional',
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Personal portfolio built with React, TypeScript, MUI, and Vite.',
        technologies: ['React', 'TypeScript', 'MUI', 'Vite', 'LESS'],
        category: 'Personal',
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 5,
        title: 'Task Management App',
        description: 'Full-stack task management application with real-time updates.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket'],
        category: 'Personal',
        githubUrl: '#',
        liveUrl: '#',
    },
];

const categories = ['All', 'Professional', 'Personal'];

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = allProjects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            );
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <Container maxWidth="lg">
            <Box className="projects-page">
                <Typography variant="h2" gutterBottom textAlign="center">
                    My Projects
                </Typography>

                <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
                    A collection of my professional and personal projects
                </Typography>

                {/* Filters */}
                <Box className="filters-section" mb={4}>
                    <TextField
                        fullWidth
                        placeholder="Search projects by name, description, or technology..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mb: 3 }}
                    />

                    <Box className="categories-container">
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                color={selectedCategory === category ? 'primary' : 'default'}
                                variant={selectedCategory === category ? 'filled' : 'outlined'}
                                className="category-chip"
                            />
                        ))}
                    </Box>
                </Box>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <Grid container spacing={4}>
                        {filteredProjects.map((project) => (
                            <Grid item xs={12} md={6} lg={4} key={project.id}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Box className="no-results" textAlign="center" py={8}>
                        <Typography variant="h6" color="text.secondary">
                            No projects found matching your criteria
                        </Typography>
                    </Box>
                )}

                {/* Stats */}
                <Box className="stats-section" mt={6}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={6} sm={3}>
                            <Box className="stat-card" textAlign="center">
                                <Typography variant="h4" color="primary">
                                    {allProjects.length}
                                </Typography>
                                <Typography variant="body2">Total Projects</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className="stat-card" textAlign="center">
                                <Typography variant="h4" color="primary">
                                    {allProjects.filter(p => p.category === 'Professional').length}
                                </Typography>
                                <Typography variant="body2">Professional</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Projects;