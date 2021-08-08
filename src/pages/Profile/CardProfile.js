import React from 'react'
import './CardProfile.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';

const CardProfile = () => {
    return (
        <div class="wrapper">

            <div class="profile-card">
                <div class="profile-header">
                    {/* <img src="https://i.imgur.com/X2oObC4.png" alt="" /> */}
                </div>
                <div class="profile-body">
                        <div class="author-img">
                            <img src="https://i.imgur.com/4FbD7mF.png" alt="" />
                        </div>
                        <div class="name">Ihsan Muhammad Fauzan</div>
                        <div class="intro">
                        <p>Robert smith is an enthsiastic and passionate story
                            Teller.He loves to do different
                                home-made things and share to the world.
                        </p>
                        </div>
                        <div class="social-icon">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>  
    )
}

export default CardProfile