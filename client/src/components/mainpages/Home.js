import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DecorationDInterieur from './Homepage/DecorationDInterieur'

const Home = () => {
    return (
        <div className="home">
            <>
                {/* Part 1 */}
                <DecorationDInterieur/>
            </>
        </div>
    );
};

export default Home;