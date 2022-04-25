import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/IMG1.png";
import IMG2 from "../../Assets/IMG2.png";
import IMG3 from "../../Assets/IMG3.png";
import IMG4 from "../../Assets/IMG4.png";
import IMG5 from "../../Assets/IMG5.png";
import IMG6 from "../../Assets/IMG6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="React Portfolio WebSite" />
          </div>
          <h3>React Portfolio WebSite</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ShivamDureja/React-Portfolio-Website"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="InShorts Clone App" />
          </div>
          <h3>InShorts Clone App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ShivamDureja/Inshorts-Clone-App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShivamDureja/Inshorts-Clone-App"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="The Pizza Express" />
          </div>
          <h3>The Pizza Express</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ShivamDureja/ThePizzaExpress"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://thepizzaexpress.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="Rock Paper Scissor" />
          </div>
          <h3>Rock Paper Scissor</h3>
          <div className="portfolio_item-cta">
          <a
            href="https://github.com/ShivamDureja/Rock-Paper-Scissors"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://shivamdureja.github.io/Rock-Paper-Scissors/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="Tap Music" />
          </div>
          <h3>Tap Music</h3>
          <div className="portfolio_item-cta">
          <a
            href="https://github.com/ShivamDureja/TapMusic"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://shivamdureja.github.io/TapMusic/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="project 1" />
          </div>
          <h3>SmartHouse Chrome Extension</h3>
          <div className="portfolio_item-cta">
          <a
            href="https://github.com/ShivamDureja/SmartHouse"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://github.com/ShivamDureja/SmartHouse"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
