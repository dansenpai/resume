import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div className="container">
        <section>
          <h1 className="main-text title">Sobre mim</h1>
          <p className="main-text">
            Meu nome é Daniel Santos, sou de Teresina/PI, desenvolvedor Fullstack com foco em Frontend. Atualmente trabalho remoto 
            para a <a href="http://vizir.com.br" target="_blank" className="link">Vizir Sofware Studio </a> e nas horas vagas programo um pouco mais, jogo video-game e tento aprender tocar guitarra.
          </p>

          <p className="main-text">
            Em Teresina, já passei pela <a className="link">Medplan</a> e <a className="link">Inforgeneses</a>. Cursei Sistemas de Informação  na 
            FATEPI em 2014, depois que conheci programação comecei a estudar por conta própria, como sempre fiz, e assim consegui começar trabalhar 
            logo, como consequência comecei a aprender bastante.
          </p><br />

          <h1 className="main-text title">Habilidades</h1>
          <ul className="common-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Frameworks CSS (Bulma, Boostrap)</li>
            <li>Javascript</li>
            <li>Angular js</li>
            <li>React / Redux</li>
            <li>NodeJS</li>
            <li>GIT</li>
            <li>Ruby / Rails</li>
            <li>Auto didata, aprendo bem rápido.</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default About;
