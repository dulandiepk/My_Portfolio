import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { Email, GitHub, LinkedIn, Download } from '@mui/icons-material';
import { motion } from 'framer-motion';

const AnimatedBlob = () => (
    <motion.svg
        initial={{ scale: 0.9, opacity: 0.4 }}
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 340,
            height: 340,
            zIndex: 0,
            pointerEvents: 'none',
        }}
        viewBox="0 0 340 340"
    >
        <defs>
            <radialGradient id="blobGradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="0.35" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>
        <ellipse cx="170" cy="170" rx="170" ry="150" fill="url(#blobGradient)" />
    </motion.svg>
);

const formVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } },
};

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <Box
            id="contact"
            sx={{
                py: 10,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                minHeight: '80vh',
                bgcolor: 'transparent',
                zIndex: 1,
            }}
        >
            <AnimatedBlob />
            <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                style={{
                    backdropFilter: 'blur(16px)',
                    background: 'linear-gradient(135deg, rgba(17,34,64,0.85) 60%, rgba(100,255,218,0.08) 100%)',
                    borderRadius: 32,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    padding: '3rem 2rem',
                    maxWidth: 600,
                    width: '100%',
                    border: '1.5px solid rgba(100,255,218,0.18)',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2,
                }}
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
                    }}
                >
                    Get in Touch
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#fff',
                        mb: 3,
                        fontSize: 17,
                        lineHeight: 1.7,
                    }}
                >
                    Want to work together or have a question? Drop me a message below!
                </Typography>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Stack spacing={2}>
                        <TextField
                            label="Your Name"
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ style: { color: '#64ffda' } }}
                            sx={{
                                input: { color: '#fff' },
                                label: { color: '#64ffda' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#64ffda' },
                                    '&:hover fieldset': { borderColor: '#64ffda' },
                                },
                            }}
                        />
                        <TextField
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ style: { color: '#64ffda' } }}
                            sx={{
                                input: { color: '#fff' },
                                label: { color: '#64ffda' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#64ffda' },
                                    '&:hover fieldset': { borderColor: '#64ffda' },
                                },
                            }}
                        />
                        <TextField
                            label="Your Message"
                            name="message"
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                            rows={4}
                            InputLabelProps={{ style: { color: '#64ffda' } }}
                            sx={{
                                textarea: { color: '#fff' },
                                label: { color: '#64ffda' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#64ffda' },
                                    '&:hover fieldset': { borderColor: '#64ffda' },
                                },
                            }}
                        />
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button
                                type="submit"
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderRadius: 3,
                                    color: '#64ffda',
                                    borderColor: '#64ffda',
                                    px: 4,
                                    fontWeight: 600,
                                    letterSpacing: 1,
                                    transition: '0.3s',
                                    '&:hover': {
                                        bgcolor: 'rgba(100,255,218,0.08)',
                                        borderColor: '#64ffda',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </motion.div>
                        {submitted && <Alert severity="success">Message sent!</Alert>}
                    </Stack>
                </form>
                {/* Download CV Button */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/Dulandie_Kandanearachchi_CV.pdf"
                        download
                        startIcon={<Download />}
                        sx={{
                            mt: 3,
                            mb: 2,
                            borderRadius: 3,
                            background: 'linear-gradient(90deg, #64ffda 40%, #26e6a6 100%)',
                            color: '#0a192f',
                            fontWeight: 600,
                            letterSpacing: 1,
                            boxShadow: '0 2px 12px #64ffda44',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #26e6a6 0%, #64ffda 100%)',
                                color: '#fff',
                            },
                        }}
                    >
                        Download CV
                    </Button>
                </motion.div>
                <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                    <motion.a
                        href="mailto:dulandie@email.com"
                        whileHover={{ scale: 1.2, color: '#64ffda' }}
                        style={{ color: '#fff', transition: 'color 0.3s' }}
                        aria-label="Email Dulandie"
                    >
                        <Email sx={{ fontSize: 32 }} />
                    </motion.a>
                    <motion.a
                        href="https://github.com/dulandiepk"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#64ffda' }}
                        style={{ color: '#fff', transition: 'color 0.3s' }}
                        aria-label="Dulandie on GitHub"
                    >
                        <GitHub sx={{ fontSize: 32 }} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/dulandiek/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#64ffda' }}
                        style={{ color: '#fff', transition: 'color 0.3s' }}
                        aria-label="Dulandie on LinkedIn"
                    >
                        <LinkedIn sx={{ fontSize: 32 }} />
                    </motion.a>
                </Stack>
            </motion.div>
        </Box>
    );
};

export default Contact;