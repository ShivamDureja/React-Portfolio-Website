import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>SHIVAM DUREJA</a>
        <ul className='permalinks'>
          <li><a href="#">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#exp">EXPERIENCE</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.instagram.com/_shivam_dureja/?hl=en" target='_blank'><BsInstagram/></a>
          <a href="https://www.linkedin.com/in/shivam-dureja-3ba2b1198/" target='_blank'><GrLinkedin/></a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'><MdOutlineEmail/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; 2022. All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer