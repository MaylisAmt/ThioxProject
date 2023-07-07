import React from 'react';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';
import ImageGallery from '../Components/ImageGallery';

const Galerie = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <ImageGallery />
            <p>Ici se trouveront les photos</p>
        </div>
    );
};

export default Galerie;