import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './LandingPageFullscreen.css';
import LandingPagePict from '../../../images/vote-illustrations.svg'


const LandingPageFullscreen = () => {

    return(
        <div className="bgLandingPageFull">
            <div className="contentLandingPageFull">
                <div className="jumbotronFull">
                    <h2>Ahoy Kapten!</h2>
                    <h5>Siapkah kau tuk memilih pemimpin bahtera pembawa visi bersama?</h5>
                    <div className="buttonFull">
                    <Link  className="buttonFull"><button>Skuy</button></Link>
                </div>
                </div>
            </div>
         <div>
                <img src={LandingPagePict} className="pictFull"></img>
            </div>
        </div>
    )
}

export default LandingPageFullscreen;