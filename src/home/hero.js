import React from 'react';
import profileImage from '../assets/images/photo1.png';
import {FaFacebookSquare, FaGithubSquare, FaLinkedinIn, FaWhatsappSquare} from 'react-icons/fa';

class Hero extends React.Component {
  render() {
    return(
      <section className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="profile-info">
              <img src={profileImage} />
              <div>
                <h1 className="profile-hero title">Daniel Santos</h1>
                <h2 className="profile-hero subtitle">Front-End Developer</h2>
              </div>
            </div>
            
            <div className="profile-icons">
              <FaFacebookSquare className="facebook icon" />
              <FaLinkedinIn  className="linkedin icon"/>
              <FaGithubSquare className="github icon"/>
              <FaWhatsappSquare  className="whatsapp icon"/>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
