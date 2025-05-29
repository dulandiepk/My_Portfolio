import React, { useRef, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiReact, SiTypescript, SiSpring, SiCss3, SiPython, SiMysql, SiMui } from 'react-icons/si';

// Animated SVG Blob for background with parallax
const AnimatedBlob = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => (
    <motion.svg
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{
            scale: [0.95, 1.08, 0.95],
            opacity: [0.5, 0.7, 0.5],
            x: mouseX * 0.04,
            y: mouseY * 0.04,
        }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            top: '-18%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: 600,
            zIndex: 0,
            pointerEvents: 'none',
            filter: 'blur(2px)',
        }}
        viewBox="0 0 1600 600"
    >
        <defs>
            <radialGradient id="aboutBlobGradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="0.18" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>
        <ellipse cx="800" cy="300" rx="790" ry="250" fill="url(#aboutBlobGradient)" />
    </motion.svg>
);

const techs = [
    { name: 'Java', icon: <FaJava color="#f89820" /> },
    { name: 'React', icon: <SiReact color="#61dafb" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
    { name: 'Spring Boot', icon: <SiSpring color="#6db33f" /> },
    { name: 'CSS', icon: <SiCss3 color="#1572b6" /> },
    { name: 'Python', icon: <SiPython color="#3776ab" /> },
    { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
    { name: 'MUI', icon: <SiMui color="#007fff" /> },
];

const About: React.FC = () => {
    // Mouse parallax for blob
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!aboutRef.current) return;
            const rect = aboutRef.current.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            setMouse({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <Box
            id="about"
            ref={aboutRef}
            sx={{
                py: { xs: 8, md: 14 },
                px: { xs: 0, md: 0 },
                width: '100vw',
                minHeight: '80vh',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <AnimatedBlob mouseX={mouse.x} mouseY={mouse.y} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2 }}
                style={{
                    width: '100%',
                    margin: '0 auto',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Section Title with animated accent bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ width: '100%', textAlign: 'center' }}
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            mb: 1,
                            letterSpacing: 1,
                            background: 'linear-gradient(90deg, #64ffda 40%, #fff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Montserrat, Inter, sans-serif',
                            display: 'inline-block',
                            position: 'relative',
                        }}
                    >
                        About Me
                    </Typography>
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0.5 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{
                            margin: '0 auto',
                            marginTop: 8,
                            height: 6,
                            width: 160,
                            borderRadius: 8,
                            background: 'linear-gradient(90deg, #64ffda 40%, #26e6a6 100%)',
                            boxShadow: '0 0 16px #64ffda88, 0 2px 12px #26e6a688',
                        }}
                    />
                </motion.div>
                {/* Glassmorphism About Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        margin: '40px auto 48px auto',
                        width: '100%',
                        maxWidth: 900,
                        borderRadius: 32,
                        background: 'rgba(17,34,64,0.65)',
                        backdropFilter: 'blur(14px)',
                        boxShadow: '0 4px 32px 0 #64ffda22',
                        padding: '2.8rem 2.2rem',
                        border: '1.5px solid rgba(100,255,218,0.13)',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#fff',
                            fontSize: { xs: 17, md: 20 },
                            lineHeight: 1.7,
                            fontFamily: 'Inter, Montserrat, sans-serif',
                            textAlign: 'center',
                        }}
                    >
                        I am a Computer Science undergraduate at the Informatics Institute of Technology, Sri Lanka, driven by a passion for design, technology, and problem-solving. My studies have given me a solid foundation in software development and algorithms. I enjoy working on projects that challenge me to think creatively and apply my knowledge to real-world situations.
                    </Typography>
                </motion.div>
                {/* Technologies */}
                <Typography
                    variant="h5"
                    sx={{
                        color: '#64ffda',
                        mb: 2,
                        fontWeight: 600,
                        letterSpacing: 1,
                        fontFamily: 'Montserrat, Inter, sans-serif',
                        background: 'linear-gradient(90deg, #64ffda 40%, #fff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Technologies I work with
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 3, md: 5 }}
                    sx={{
                        mt: 1,
                        justifyContent: 'center',
                        maxWidth: 1200, // Increased width for modern look
                        mx: 'auto',
                        px: { xs: 1, md: 6 },
                    }}
                >
                    {techs.map((tech, i) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={tech.name}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 78,
                                        height: 78,
                                        borderRadius: '50%',
                                        background: 'rgba(22, 40, 60, 0.85)',
                                        boxShadow: '0 4px 24px 0 #64ffda33, 0 2px 8px #26e6a633',
                                        border: '2.5px solid rgba(100,255,218,0.18)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 1.5,
                                        transition: 'box-shadow 0.3s, border 0.3s',
                                        '&:hover': {
                                            boxShadow: '0 0 32px #64ffda77, 0 2px 16px #26e6a688',
                                            border: '2.5px solid #64ffda',
                                        },
                                    }}
                                >
                                    {/* Increase icon size for modern look */}
                                    {React.cloneElement(tech.icon, { size: 44 })}
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: 17,
                                        letterSpacing: 0.5,
                                        textAlign: 'center',
                                        fontFamily: 'Inter, Montserrat, sans-serif',
                                    }}
                                >
                                    {tech.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Box>
    );
};

export default About;