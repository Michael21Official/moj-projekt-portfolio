import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip,
    Box,
    Stack,
    Link,
} from '@mui/material';
import { GitHub, OpenInNew, Info } from '@mui/icons-material';
import './ProjectCard.less';

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const hasCode = !!project.githubUrl;
    const hasLive = !!project.liveUrl;

    // Jeśli nie ma żadnego linku - nie pokazuj CardActions
    if (!hasCode && !hasLive) {
        return (
            <Card className="project-card" elevation={3}>
                {project.imageUrl && (
                    <Box className="project-image-container">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="project-image"
                        />
                    </Box>
                )}

                <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom className="project-title">
                        {project.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className="project-description">
                        {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} mt={2} flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech, index) => (
                            <Chip
                                key={index}
                                label={tech}
                                size="small"
                                variant="outlined"
                                className="tech-chip"
                            />
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="project-card" elevation={3}>
            {project.imageUrl && (
                <Box className="project-image-container">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="project-image"
                    />
                </Box>
            )}

            <CardContent>
                <Typography variant="h5" component="h3" gutterBottom className="project-title">
                    {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" className="project-description">
                    {project.description}
                </Typography>

                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, index) => (
                        <Chip
                            key={index}
                            label={tech}
                            size="small"
                            variant="outlined"
                            className="tech-chip"
                        />
                    ))}
                </Stack>
            </CardContent>

            <CardActions
                className="project-actions"
                sx={{
                    justifyContent: hasCode && hasLive ? 'space-between' : 'center',
                    p: 2,
                    pt: 0
                }}
            >
                {hasCode && (
                    <Button
                        component={Link}
                        size="small"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={!hasLive ? { width: '100%' } : {}}
                    >
                        Code
                    </Button>
                )}

                {hasLive && !hasCode && (
                    <Button
                        component={Link}
                        size="small"
                        startIcon={<Info />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        underline="none"
                        sx={{ width: '100%' }}
                    >
                        About
                    </Button>
                )}

                {hasLive && hasCode && (
                    <Button
                        component={Link}
                        size="small"
                        startIcon={<OpenInNew />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        underline="none"
                    >
                        Live Demo
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};