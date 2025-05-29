import React from 'react';
import { Box, Typography, Stack, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import petImg from '../assets/pets.jpg';
import planeImg from '../assets/plane.jpg';
import ticketImg from '../assets/ticket.jpg';
import sProgressionImg from '../assets/student-progression.jpg';

const projects = [
    {
        title: "Happy Pet",
        description: "Platform for pet purchase, animal adoption and matchmaking.",
        link: "https://happy-pet-seven.vercel.app/",
        bgImage: petImg,
    },
    {
        title: "Flight Booking System",
        description: "Java app for managing airplane seat reservations, including booking, cancellations, seat availability, and ticket management.",
        link: "https://github.com/dulandiepk/PlaneMangementSystem",
        bgImage: planeImg,
    },
    {
        title: "Ticketing System",
        description: "Java CLI application for managing event ticketing, including ticket release by vendors, customer ticket purchases, real-time ticket pool monitoring, and configuration management.",
        link: "https://github.com/dulandiepk/Ticketing_System",
        bgImage: ticketImg,
    },
    {
        title: "Student Progression Evaluator",
        description: "Python CLI application for predicting student progression outcomes, including input validation, outcome determination based on academic credit rules, multi-student evaluation, graphical histogram generation, and progression data storage using lists and text files.",
        link: "https://github.com/dulandiepk/student-progression-evaluator",
        bgImage: sProgressionImg,
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, type: 'spring', stiffness: 70 },
    }),
    hover: { scale: 1.025, boxShadow: '0 8px 32px 0 #64ffda44' },
};

const Projects: React.FC = () => (
    <Box id="projects" sx={{ py: 10, px: { xs: 1, md: 4 }, bgcolor: 'transparent', maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                    letterSpacing: 1,
                    fontFamily: 'Montserrat, Inter, sans-serif',
                    background: 'linear-gradient(90deg, #64ffda 40%, #fff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                }}
            >
                My Projects
            </Typography>
            <motion.div
                initial={{ scaleX: 0, opacity: 0.5 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                    margin: '0 auto',
                    marginTop: 8,
                    height: 5,
                    width: 120,
                    borderRadius: 8,
                    background: 'linear-gradient(90deg, #64ffda 40%, #26e6a6 100%)',
                    boxShadow: '0 0 16px #64ffda88, 0 2px 12px #26e6a688',
                }}
            />
        </Box>
        <Stack spacing={6}>
            {projects.map((project, i) => (
                <motion.div
                    key={project.title}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ borderRadius: 24 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: i % 2 === 0 ? 'row' : 'row-reverse' },
                            alignItems: 'stretch',
                            borderRadius: 6,
                            overflow: 'hidden',
                            background: 'rgba(17,34,64,0.75)',
                            border: '1.5px solid rgba(100,255,218,0.18)',
                            boxShadow: '0 8px 32px 0 #64ffda22',
                            minHeight: 260,
                            position: 'relative',
                            transition: 'box-shadow 0.3s, border 0.3s',
                            '&:hover': {
                                boxShadow: '0 0 32px #64ffda77, 0 2px 16px #26e6a688',
                                border: '1.5px solid #64ffda',
                            },
                        }}
                    >
                        {/* Image with overlay */}
                        <Box
                            sx={{
                                flex: { xs: '0 0 180px', md: '0 0 340px' },
                                minHeight: { xs: 180, md: 260 },
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${project.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    filter: 'brightness(0.92)',
                                    zIndex: 1,
                                    transition: 'transform 0.5s cubic-bezier(.23,1.02,.32,1)',
                                }}
                            />
                            {/* Overlay for readability */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(120deg, rgba(17,34,64,0.18) 40%, rgba(17,34,64,0.92) 100%)',
                                    zIndex: 2,
                                }}
                            />
                        </Box>
                        {/* Description */}
                        <Box
                            sx={{
                                flex: 1,
                                p: { xs: 3, md: 5 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                position: 'relative',
                                zIndex: 3,
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{
                                    color: '#64ffda',
                                    mb: 1,
                                    fontFamily: 'Montserrat, Inter, sans-serif',
                                    background: 'linear-gradient(90deg, #64ffda 40%, #fff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#fff',
                                    mb: 2,
                                    fontSize: 17,
                                    lineHeight: 1.7,
                                    fontFamily: 'Inter, Montserrat, sans-serif',
                                }}
                            >
                                {project.description}
                            </Typography>
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
                                    alignSelf: 'flex-start',
                                    px: 2.5,
                                    py: 1,
                                    background: 'rgba(17,34,64,0.25)',
                                    backdropFilter: 'blur(2px)',
                                    transition: 'background 0.2s, color 0.2s',
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
                    </Paper>
                </motion.div>
            ))}
        </Stack>
    </Box>
);

export default Projects;