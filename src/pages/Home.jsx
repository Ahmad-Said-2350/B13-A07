import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import Friends from '../components/Friends ';

const Home = () => {
    return (
        <div>
        <Hero></Hero>
         <Friends></Friends>
        </div>
    );
};

export default Home;