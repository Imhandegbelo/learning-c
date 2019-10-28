import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  render() {
    return <div>

      <div className="sidebar-navigation hidden-sm hidden-xs">
        <div className="logo">
          <a href="#">
            Learning<em>Curve</em>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#main-content">
                <span className="rect"></span>
                <span className="circle"></span>
                Home
					    </a>
            </li>
            <li>
              <a href="#mission">
                <span className="rect"></span>
                <span className="circle"></span>
                Our Mission
					    </a>
            </li>
            <li>
              <a href="#vision">
                <span className="rect"></span>
                <span className="circle"></span>
                Our Vision
					    </a>
            </li>
            <li>
              <a href="#contact">
                <span className="rect"></span>
                <span className="circle"></span>
                Contact Us
					    </a>
            </li>
            <li>
              <a href="#about">
                <span className="rect"></span>
                <span className="circle"></span>
                About
					    </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Nav Ends Here */}

      <div className="main">
        <section id="main-content">
          <div className="home-header">
            <h1>We gat your back in the<br></br>world of learning</h1>
            <p className="desc">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="button">
            <button>Get Started</button>
            </div>
          </div>
        </section>

        <section id="mission">
          <h2>Our Mission</h2>
          <ul>
            <li>To be a learning alternative to students</li>
            <li>To help explain futher when the learner does not understand</li>
            <li>To produce a quick reference</li>
            <li>To bring learning materials closer</li>
            <li>To make knowledge out of school a possibility</li>
          </ul>
        </section>

        <section id="vision"></section>

        <section id="contact">
        </section>

        <section id="about"></section>
        <footer>
          &copy; Learning Curve
        </footer>
      </div>
    </div>
  }
}


export default Home;
