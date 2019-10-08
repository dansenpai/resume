import React from 'react';
import profileImage from '../assets/images/photo1.png';
import {FaFacebookSquare, FaGithubSquare, FaLinkedinIn, FaWhatsappSquare} from 'react-icons/fa';
import {Link, withRouter} from 'react-router-dom';

class Sidebar extends React.Component {
  routes = [
    {
      name: 'Sobre mim',
      path: 'about',
    },
    {
      name: 'Portfólio',
      path: 'portfolio',
    },
    {
      name: 'Blog',
      path: 'blog'
    }
  ]

  render() {
    return(
      <div className="sidebar">
        <div className="profile-info">
          <img src={profileImage} />
          <div>
            <h1 className="profile-hero title">Daniel Santos</h1>
            <h2 className="profile-hero subtitle">Desenvolvedor Front End</h2>
          </div>
        </div>
        
        <div className="profile-icons">
          <FaFacebookSquare className="facebook icon" />
          <FaLinkedinIn  className="linkedin icon"/>
          <FaGithubSquare className="github icon"/>
          <FaWhatsappSquare  className="whatsapp icon"/>
        </div>

        <div className="links">
          {this.routes.map((route, index) => (
            <Link 
              key={index} 
              to={`/${route.path}`} 
              className={`link-item ${this.props.location.pathname == '/' + route.path ? 'active' : ''}`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);
