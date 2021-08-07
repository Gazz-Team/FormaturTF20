import React from 'react';
import { Link } from 'react-router-dom'
import './LandingPageMinimalized.css';
// import LandingPagePict from '../../';
import LandingPagePict from '../../../images/vote-illustrations.svg'

const LandingPageMinimalized = () => {
    return(
        <div className="bgLandingPageMini">
            <div className="titleMini">
                <h1>Pemilu Swashbuckler</h1>
            </div>
            <div className="jumbotronMini">
                <h2>Ahoy Kapten!</h2>
                <h5>Siapkah kau tuk memilih pemimpin bahtera pembawa visi bersama?</h5>
            </div>
            <div className="buttonMini">
                <Link className="buttonMini"><button>Skuy</button></Link>
            </div>
            <div>
                <img src={LandingPagePict} className="pictMini"></img>
            </div>
        </div>
    )
}

export default LandingPageMinimalized;