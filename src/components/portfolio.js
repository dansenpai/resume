import React from 'react';
import Stars from './stars';

class Portfolio extends React.Component {
  render() {
    return(
      <section>
        <div>
          <h1 className="main-text title">Portfólio</h1>
          <div className="columns">
            <article className="column is-4">
              <div className="portfolio-item">
                <div>
                  <h2 className="subtitle has-text-white">Lol Stories</h2>
                  <p>App para leitura das lores, histórias e quadrinhos de league of legends.</p>
                </div>
                <div>
                  <img src={require('../assets/images/lolstories.webp')} />
                  <Stars />
                </div>
              </div>

            </article>
            
            {/* <div className="column is-4 portfolio-item">
              <h2 className="subtitle has-text-white">Unip Notas</h2>
              <p></p>
              <a href="https://play.google.com/store/apps/details?id=br.com.unipnotas" target="_blank">
                <img src="https://lh3.googleusercontent.com/zrMX858legGsWKRfT0qSXVhhrz1itMVAMpLt-VT-cFhRuhc-z4EgzSmigYIiXYWHHcY=w1402-h927-rw" />
              </a>
            </div>
            
            <div className="column is-4 portfolio-item">
              <h2 className="subtitle has-text-white">Inever</h2>
              <p></p>
              <a href="https://play.google.com/store/apps/details?id=com.inever" target="_blank">
                <img src="https://lh3.googleusercontent.com/OQut1qGOBj7dS8fpqvzKjIgGG9UnMwH1esUFDTfozR0KqNWtBlwXpPn5HP2zLlxaxyY=w1402-h927-rw" />
              </a>
            </div> */}
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
