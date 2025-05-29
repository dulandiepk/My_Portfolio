// Header.tsx (add scroll progress bar)
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const navItems = ['About', 'Projects', 'Contact'];

const Header: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            setProgress((scrollTop / docHeight) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}>
            <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(10,25,47,0.85)', backdropFilter: 'blur(12px)', boxShadow: '0 2px 12px rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(100,255,218,0.08)' }}>
                <LinearProgress variant="determinate" value={progress} sx={{ height: 3, bgcolor: 'transparent', '& .MuiLinearProgress-bar': { background: 'linear-gradient(90deg, #64ffda 40%, #26e6a6 100%)' } }} />
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 2, background: 'linear-gradient(90deg, #64ffda 40%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Montserrat, Inter, sans-serif' }}>
                        Dulandie
                    </Typography>
                    <Box>
                        {navItems.map((item) => (
                            <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                                <Button color="inherit" href={`#${item.toLowerCase()}`} sx={{
                                    ml: 2,
                                    fontWeight: 500,
                                    letterSpacing: 1,
                                    position: 'relative',
                                    px: 2,
                                    fontFamily: 'Inter, Montserrat, sans-serif',
                                    '&:after': {
                                        content: '""',
                                        display: 'block',
                                        width: 0,
                                        height: 2,
                                        bgcolor: '#64ffda',
                                        transition: 'width 0.3s',
                                        position: 'absolute',
                                        left: 0,
                                        bottom: 0,
                                    },
                                    '&:hover:after': {
                                        width: '100%',
                                    },
                                    '&:hover': {
                                        color: '#64ffda',
                                        bgcolor: 'rgba(100,255,218,0.08)',
                                    },
                                }}>
                                    {item}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
};

export default Header;
