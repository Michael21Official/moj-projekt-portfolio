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
} from '@mui/material';
import { GitHub, OpenInNew, Info } from '@mui/icons-material';
import { trackProjectClick } from '../../../analytics/ga4';
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

    const handleCodeClick = () => {
        if (project.githubUrl) {
            trackProjectClick(project.title, 'code');
        }
    };

    const handleLiveClick = () => {
        if (project.liveUrl) {
            if (hasCode) {
                trackProjectClick(project.title, 'live');
            } else {
                trackProjectClick(project.title, 'about');
            }
        }
    };

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
                {hasCode && project.githubUrl && (
                    <Button
                        size="small"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCodeClick}
                        sx={!hasLive ? { width: '100%' } : {}}
                    >
                        Code
                    </Button>
                )}

                {hasLive && !hasCode && project.liveUrl && (
                    <Button
                        size="small"
                        startIcon={<Info />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        onClick={handleLiveClick}
                        sx={{ width: '100%' }}
                    >
                        About
                    </Button>
                )}

                {hasLive && hasCode && project.liveUrl && (
                    <Button
                        size="small"
                        startIcon={<OpenInNew />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        onClick={handleLiveClick}
                    >
                        Live Demo
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};