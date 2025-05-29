import React, { useEffect, useState } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } },
};

// Back-to-Top Button Component
const BackToTop: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        zIndex: 1000,
                    }}
                >
                    <Fab
                        color="primary"
                        size="medium"
                        aria-label="Back to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        sx={{
                            background: 'rgba(17,34,64,0.85)',
                            color: '#64ffda',
                            boxShadow: '0 2px 12px #64ffda44',
                            '&:hover': {
                                background: '#64ffda',
                                color: '#0a192f',
                            },
                        }}
                    >
                        <ArrowUpwardIcon />
                    </Fab>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Footer: React.FC = () => (
    <>
        <motion.div variants={footerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Box
                component="footer"
                sx={{
                    mt: 8,
                    py: 3,
                    textAlign: 'center',
                    bgcolor: 'rgba(17,34,64,0.7)',
                    color: '#fff',
                    borderTop: '1px solid rgba(100,255,218,0.08)',
                    fontSize: 14,
                    letterSpacing: 1,
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'Inter, Montserrat, sans-serif',
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} Dulandie 2025. All rights reserved
                </Typography>
            </Box>
        </motion.div>
        <BackToTop />
    </>
);

export default Footer;