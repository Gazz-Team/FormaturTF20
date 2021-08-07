import React, {useState} from 'react';
import {NavbarRoutes} from '../../../routes/routes'
import {NavLink, useLocation} from 'react-router-dom'
import './Navbar.css'
import {AllOpenRoutes} from '../../../routes/routes';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const AllOpenRoutesPath = AllOpenRoutes.map(route=>route.path)

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
        return (
                <nav className="navbar">
                    <div className="">
                        <NavLink exact to='/' className='nav-logo'>
                            Pemilu Swashbuckler
                        </NavLink>
                    </div>
    
                    <div className='navbar-content' >
                        <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        {
                            NavbarRoutes.map((item, index)=>{
                                return (
                                    <NavLink exact to = {NavbarRoutes[index].path} className='nav-links' onClick={handleClick} key={index}>{NavbarRoutes[index].label} </NavLink>
                                    )
                                })
                            }
                        </ul>
                        <div className="nav-icon"  onClick={handleClick}>
                            {/* <i className={click? <MenuIcon />: <CloseIcon />}></i> */}
                            {
                                click ? <CloseIcon /> : <MenuIcon />
                            }
                        </div>
                    </div>
                </nav>
        );
    return <></>
}

export default Navbar;
