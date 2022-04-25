import React from 'react';
import Footer from '../Foooter/Footer';
import Hero from '../Hero/Hero';
import About from '../HomeAssets/About/About';
import HomeInfo from '../HomeAssets/HomeInfo/HomeInfo';
import Opportunities from '../Opportunity/Opportunities/Opportunities';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <About></About>
            <HomeInfo></HomeInfo>
            <Opportunities></Opportunities>
            <Footer></Footer>
        </div>
    );
};

export default Home;