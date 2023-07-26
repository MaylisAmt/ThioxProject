import React from 'react';
import Logo from '../Components/Logo';
import Photo from '../assets/img/IMG_2208.jpg';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className='home' >
            <img src= {Photo} alt="photographer"/>
            </div>
        </div>
    );
};

export default Home;