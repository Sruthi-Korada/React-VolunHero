import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './Footer.scss'
const Footer = () =>{
    return(
        <Navbar bg="primary" variant="dark" className="footer__container ">
            <h4>&copy; 2020. VolunHero. All rights reservered.</h4>
        </Navbar>
    )
}

export default Footer;