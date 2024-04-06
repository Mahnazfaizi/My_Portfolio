import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {GiSkills} from 'react-icons/gi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {useState} from 'react';
import Aos from 'aos';

const Nav=()=>{
  const [activeNav , setActiveNav] = useState('#');
    return(
        <div id="nav" data-aos="fade-down" data-aos-delay="3300">
          <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
          <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
          <a href="#Portfolio"  onClick={()=> setActiveNav('#exprience')} className={activeNav === '#exprience' ? 'active' : ''}>
            <BiBook/></a>
          <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills/></a>
          <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
        </div>
    )
}

export default Nav;