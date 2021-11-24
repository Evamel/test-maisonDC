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
                <img src={Logo} width="200rem"/>
                <img src={Cadre} width="250rem"/>
                <img src={Salon} width="200rem"/>
                <img src={Lumiere} width="200rem"/>
            </div>
        </div>
    );
};

export default DecorationDInterieur;