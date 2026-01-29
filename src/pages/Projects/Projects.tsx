import { useState } from 'react';
import {
    Typography,
    TextField,
    InputAdornment,
    Chip,
    Box,
    Button,
    IconButton,
} from '@mui/material';
import { Search, Clear } from '@mui/icons-material';
import { ProjectCard } from '@components/ui/ProjectCard';
import './Projects.less';

const allProjects = [
    {
        id: 1,
        title: 'Sabre Poland - Microservices Development',
        description: 'Design and development of microservices using Java/Spring, React with TypeScript, and LESS for styling. Implemented scalable backend services with Kanban methodology.',
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

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('All');
    };

    return (
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
                        endAdornment: searchTerm && (
                            <InputAdornment position="end">
                                <IconButton size="small" onClick={() => setSearchTerm('')}>
                                    <Clear />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 3 }}
                />

                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box className="categories-container">
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                color={selectedCategory === category ? 'primary' : 'default'}
                                variant={selectedCategory === category ? 'filled' : 'outlined'}
                                className="category-chip"
                                sx={{ mr: 1, mb: 1 }}
                            />
                        ))}
                    </Box>

                    {(searchTerm || selectedCategory !== 'All') && (
                        <Button
                            startIcon={<Clear />}
                            onClick={clearFilters}
                            size="small"
                            variant="outlined"
                        >
                            Clear Filters
                        </Button>
                    )}
                </Box>

                <Typography variant="body2" color="text.secondary">
                    Showing {filteredProjects.length} of {allProjects.length} projects
                </Typography>
            </Box>

            {/* Projects Grid - Box zamiast Grid */}
            {filteredProjects.length > 0 ? (
                <Box display="flex" flexWrap="wrap" gap={3}>
                    {filteredProjects.map((project) => (
                        <Box key={project.id} flex={{ xs: '1 1 100%', md: '1 1 48%', lg: '1 1 31%' }}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </Box>
            ) : (
                <Box className="no-results" textAlign="center" py={8}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        No projects found matching your criteria
                    </Typography>
                    <Button
                        variant="outlined"
                        onClick={clearFilters}
                        startIcon={<Clear />}
                    >
                        Clear all filters
                    </Button>
                </Box>
            )}

            {/* Stats - Box zamiast Grid */}
            <Box className="stats-section" mt={6}>
                <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
                    <Box flex={{ xs: '1 1 40%', sm: '1 1 20%' }}>
                        <Box className="stat-card" textAlign="center">
                            <Typography variant="h3" color="primary" fontWeight={700}>
                                {allProjects.length}
                            </Typography>
                            <Typography variant="body2">Total Projects</Typography>
                        </Box>
                    </Box>
                    <Box flex={{ xs: '1 1 40%', sm: '1 1 20%' }}>
                        <Box className="stat-card" textAlign="center">
                            <Typography variant="h3" color="primary" fontWeight={700}>
                                {allProjects.filter(p => p.category === 'Professional').length}
                            </Typography>
                            <Typography variant="body2">Professional</Typography>
                        </Box>
                    </Box>
                    <Box flex={{ xs: '1 1 40%', sm: '1 1 20%' }}>
                        <Box className="stat-card" textAlign="center">
                            <Typography variant="h3" color="primary" fontWeight={700}>
                                {allProjects.filter(p => p.category === 'Personal').length}
                            </Typography>
                            <Typography variant="body2">Personal</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;