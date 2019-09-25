import React from 'react';
import { FaBeer } from 'react-icons/fa';

class Header extends React.Component {

  componentWillMount = () => {
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
    
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    
    });
  }

  render() {
    return(
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-header">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbar-header" className="navbar-menu is-dark">
            <div className="navbar-start">
              <a className="navbar-item">
                Sobre mim
              </a>

              <a className="navbar-item">
                Portfólio
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Download CV</strong>
                  </a>
                </div>
              </div>
              
              <a className="navbar-item">
                GITHUB
              </a>
              <a className="navbar-item">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
};

export default Header;
