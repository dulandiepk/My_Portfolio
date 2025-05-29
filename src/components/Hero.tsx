import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import DulandieImg from '../assets/test.png';

// Animated SVG Blob for background (Left)
const AnimatedBlobLeft = () => (
    <motion.svg
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            top: '-18%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 600,
            zIndex: 0,
            pointerEvents: 'none',
            filter: 'blur(2px)',
        }}
        viewBox="0 0 900 600"
    >
        <defs>
            <radialGradient id="heroBlobGradientL" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="0.25" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>
        <ellipse cx="450" cy="300" rx="440" ry="250" fill="url(#heroBlobGradientL)" />
    </motion.svg>
);

// Animated SVG Blob for background (Right)
const AnimatedBlobRight = () => (
    <motion.svg
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: 400,
            height: 300,
            zIndex: 0,
            pointerEvents: 'none',
            filter: 'blur(2px)',
        }}
        viewBox="0 0 400 300"
    >
        <defs>
            <radialGradient id="heroBlobGradientR" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#26e6a6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>
        <ellipse cx="200" cy="150" rx="200" ry="120" fill="url(#heroBlobGradientR)" />
    </motion.svg>
);

// Animated gradient border for avatar (no ring, just border)
const AnimatedAvatarBorder = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
        }}
        style={{
            padding: 7,
            borderRadius: '50%',
            background: 'linear-gradient(270deg, #64ffda, #26e6a6, #fff, #64ffda)',
            backgroundSize: '400% 400%',
            display: 'inline-block',
            position: 'relative',
            zIndex: 2,
        }}
    >
        {children}
    </motion.div>
);

// Typewriter effect for subtitle
const Typewriter: React.FC = () => {
    const text = "a computer science undergraduate.";
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (subIndex < text.length) {
            const timeout = setTimeout(() => setSubIndex(subIndex + 1), 60);
            return () => clearTimeout(timeout);
        }
    }, [subIndex, text.length]);

    useEffect(() => {
        const blinkTimeout = setInterval(() => setBlink((v) => !v), 500);
        return () => clearInterval(blinkTimeout);
    }, []);

    return (
        <span>
            {text.substring(0, subIndex)}
            <span style={{ opacity: blink ? 1 : 0, color: '#64ffda' }}>|</span>
        </span>
    );
};

const Hero: React.FC = () => (
    <Box
        id="hero"
        sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
            position: 'relative',
            overflow: 'hidden',
            px: { xs: 2, md: 8 },
            bgcolor: 'transparent',
        }}
    >
        <AnimatedBlobLeft />
        <AnimatedBlobRight />
        {/* Left: Text */}
        <Box
            sx={{
                flex: 1,
                zIndex: 2,
                py: { xs: 8, md: 0 },
                pr: { xs: 0, md: 8 },
                textAlign: { xs: 'center', md: 'left' },
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Typography
                    variant="h1"
                    fontWeight="bold"
                    sx={{
                        mb: 2,
                        letterSpacing: 1,
                        background: 'linear-gradient(90deg, #64ffda 40%, #fff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'Montserrat, Inter, sans-serif',
                        fontSize: { xs: '2.5rem', md: '4.5rem' },
                        lineHeight: 1.1,
                        textShadow: '0 2px 24px #0a192f88',
                    }}
                >
                    Hello, I am Dulandie Kandanearachchi
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        color: '#64ffda',
                        fontFamily: 'Space Grotesk, Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: '1.3rem', md: '2rem' },
                        minHeight: '2.2em',
                        letterSpacing: 1,
                        textShadow: '0 2px 12px #0a192f88',
                    }}
                >
                    <Typewriter />
                </Typography>
            </motion.div>
        </Box>
        {/* Right: Large Avatar with animated border and shadow */}
        <Box
            sx={{
                flex: '0 0 380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                mt: { xs: 6, md: 0 },
                zIndex: 2,
            }}
        >
            <Box sx={{ position: 'relative', width: 340, height: 340 }}>
                <AnimatedAvatarBorder>
                    <motion.div
                        whileHover={{ scale: 1.07, boxShadow: '0 0 64px #64ffda' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            zIndex: 2,
                            cursor: 'pointer',
                            borderRadius: '50%',
                            background: '#0a192f',
                            transition: 'box-shadow 0.3s, transform 0.3s',
                        }}
                    >
                        <Avatar
                            src={DulandieImg}
                            alt="Dulandie"
                            sx={{
                                width: 280,
                                height: 280,
                                border: '6px solid transparent',
                                background: '#0a192f',
                                position: 'relative',
                                zIndex: 2,
                                boxShadow: '0 0 48px #64ffda55, 0 4px 32px #0a192f88',
                                transition: 'box-shadow 0.3s',
                            }}
                        />
                    </motion.div>
                </AnimatedAvatarBorder>
            </Box>
        </Box>
    </Box>
);

export default Hero;