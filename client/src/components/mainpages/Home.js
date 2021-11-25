import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DecorationDInterieur from './Homepage/DecorationDInterieur'
import VenezDecouvrir from './Homepage/VenezDecouvrir'
import LaMaisonDC from './Homepage/LaMaisonDC'
import NosServices from './Homepage/NosServices'
import LaDecorationSurMesure from './Homepage/LaDecorationSurMesure'

const Home = () => {
    return (
        <div className="home">
            <>
                <DecorationDInterieur/>
                <VenezDecouvrir/>
                <LaMaisonDC/>
                <NosServices/>
                <LaDecorationSurMesure/>
            </>
        </div>
    );
};

export default Home;