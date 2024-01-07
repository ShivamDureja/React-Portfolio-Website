import React from 'react';
import './about.css'
import myImg from "../../Assets/me8.jpg"
import {FaAward} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import {SiReadthedocs} from 'react-icons/si'
import CV from '../../Assets/ShivamDureja-Resume.pdf'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={myImg} alt="about img" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'></FaAward>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
                </article>
                <article className='about__card'>
                <AiFillProject className='about__icon'></AiFillProject>
                <h5>Projects</h5>
                <small>5+ Completed</small>
                </article>
                <a href={CV} download>
                <article className='about__card-resume'>
                <SiReadthedocs className='about__icon'></SiReadthedocs>
                <h5>Resume</h5>
                <small>Download CV</small>
               
              </article>
              </a>
            </div>
              <p> Web development enthusiast with experience in building web sites through HTML,
                 CSS Bootstrap and various Javascript based frameworks. Strong collaboration skills.
                  Always up for learning new technologies. Other skills include Data Structures and Python.
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About;