import React from 'react';
import Hero from './Hero';

import Stats from './Stats';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Pricinghome from './Pricinghome';
import Education from './Education';
function HomePage() {
    return ( 
        <div>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricinghome/>
        <Education/>
        <OpenAccount/>
        


        </div>
       

     );
}

export default HomePage;