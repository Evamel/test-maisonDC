import React from 'react';

const Home_Component1 = () => {
    return (
        <div className="Home_Element1">

            <div className="Home1_Container">
                <div className="Home1_left">
                    <h1>Décoration d'intérieur à Hélécine</h1>
                    <p><span>" Si le soleil entre dans votre maison, il est un peu dans votre coeur. "</span> - Le Corbusier </p>
                    <button>Home staging</button>
                </div>

                <div className="Home1_right">
                    <img className="Home1_right_logo" src={'./Images/Logo.png'} alt="Lampes à vendre"/>
                    <img className="Home1_right_products" src={'./Images/Lampe.jpg'} alt="Lampes à vendre"/>
                    <img className="Home1_right_products" src={'./Images/Cadres.jpg'} alt="Cadres à vendre"/>
                    <img className="Home1_right_products" src={'./Images/Decoration.jpg'} alt="Décoration d'intérieur"/>
                </div>
            </div>
            
        </div>
    );
};

export default Home_Component1;