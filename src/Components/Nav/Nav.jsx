import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {FiBookOpen} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiUserCircle/></a>
      <a href="#exp" onClick={()=>setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''}><FiBookOpen/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav;