import React from 'react';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>About</h1>
            <br />
            <p>Ceci est un paragraphe</p>
            <br/>
            <p>Ceci est un second paragraphe</p>
        </div>
    );
};

export default About;