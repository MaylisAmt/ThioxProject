import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* Les images importées depuis la balise img sont accessibles dns "public" */}
            <img src="./whitelogo.png" alt="logo thiox" />
        </div>
    );
};

export default Logo;