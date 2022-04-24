import React from 'react';
import Hero from '../Hero/Hero';
import About from '../HomeAssets/About/About';
import HomeInfo from '../HomeAssets/HomeInfo/HomeInfo';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <About></About>
            <HomeInfo></HomeInfo>
        </div>
    );
};

export default Home;