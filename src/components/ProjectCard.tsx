import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        link: string;
        bgImage?: string;
    };
    index: number;
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, type: 'spring', stiffness: 70 },
    }),
    hover: { scale: 1.04, boxShadow: '0 8px 32px 0 #64ffda33' },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
    <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        style={{ height: '100%', width: '100%', display: 'flex' }}
    >
        <Card
            sx={{
                bgcolor: 'rgba(17,34,64,0.85)',
                borderRadius: 4,
                boxShadow: 8,
                border: '1px solid rgba(100,255,218,0.15)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                p: 2,
                minHeight: 340,
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                ...(project.bgImage && {
                    backgroundImage: `url(${project.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(17,34,64,0.85)',
                        zIndex: 0,
                        borderRadius: 4,
                    },
                    '& > *': { position: 'relative', zIndex: 1 },
                }),
            }}
        >
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        color: '#64ffda',
                        mb: 1,
                        fontFamily: 'Montserrat, Inter, sans-serif',
                    }}
                >
                    {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff', flexGrow: 1 }}>
                    {project.description}
                </Typography>
            </CardContent>
            <Box textAlign="right" mt={2}>
                <Button
                    href={project.link}
                    target="_blank"
                    variant="outlined"
                    endIcon={<LaunchIcon />}
                    sx={{
                        borderRadius: 2,
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        fontWeight: 600,
                        letterSpacing: 1,
                        fontFamily: 'Inter, Montserrat, sans-serif',
                        '&:hover': {
                            bgcolor: 'rgba(100,255,218,0.08)',
                            borderColor: '#64ffda',
                            color: '#fff',
                        },
                    }}
                >
                    View Project
                </Button>
            </Box>
        </Card>
    </motion.div>
);

export default ProjectCard;
