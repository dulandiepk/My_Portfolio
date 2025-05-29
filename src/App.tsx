import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import './styles.css'

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero/>
            <About/>
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
