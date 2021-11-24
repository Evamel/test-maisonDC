import React from 'react';

// Import the images
import Cadre from '../../Media/Cadre.jpg';
import Lumiere from '../../Media/Lumiere.png';
import Salon from '../../Media/Salon.jpg';
import Logo from '../../Media/Logo.png';


const DecorationDInterieur = () => {
    return (

        // Container
        <div className="DecorationDInterieur">



                {/* Part 1 */}
                <div className="DecorationDInterieur_left">
                    <h1 className="DecorationDInterieurh1">Décoration d'intérieur à Hélécine</h1>
                    <p><q>Si le soleil entre dans votre maison, il est un peu dans votre coeur</q> - Le Corbusier</p>
                    <button className="Homestaging">Home staging</button>
                </div>
                {/* Part 2 */}
                <div className="DecorationDInterieur_right">
                    {/* Images */}
                    <img src={Cadre} className="squareimg" alt="Image de cadre"/>
                    <img src={Logo} className="logoimg" alt="Logo de la maison DC"/>
                    <img src={Salon} className="salonimg" alt="Image de salon décoré"/>
                    <img src={Lumiere} className="squareimg" alt="Image de lampe"/>
                </div>





        </div>
    );
};

export default DecorationDInterieur;