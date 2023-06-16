import React from 'react';
import Logo from '../Components/Logo';
import Photo from '../assets/img/IMG_2208.jpg';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Home</h1>
            <div className='home' >
            <img src= {Photo} alt="photographer"/>
            <p>Ici se trouvera un court texte de description</p>
            </div>
        </div>
    );
};

export default Home;