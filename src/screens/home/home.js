import React from 'react';
import Screen from '../../components/screen/screen';
import {Title, Paragraph, List, ListItem, Link} from '../../components/shared.styles';

const Home = () =>{

  const technologies = [
    "React / Redux", 
    "NodeJS", 
    "Ruby / Rails",
    "GIT", 
    "HTML", 
    "CSS / Styled Components",
    "Go", 
    "Frameworks CSS (Bulma, Boostrap)",
    "Javascript", 
    "Angular Js", 
    "Auto Didata, aprendo bem rápido"
  ]

  return(
    <Screen>
      <Title>Sobre mim</Title>

      <Paragraph>
        Meu nome é Daniel Santos, moro em São Paulo - SP, sou desenvolvedor Fullstack com foco em Frontend. Atualmente trabalho para <Link target="_blank" href="https://tradersclub.com.br/">TradersClub</Link>, já trabalhei remoto também para a
        <Link href="http://vizir.com.br" target="_blank"> Vizir Sofware Studio </Link> e nas horas vagas programo um pouco mais, jogo video-game e tento aprender tocar guitarra.
      </Paragraph>

      <Paragraph>
        Em Teresina - PI, já passei pela <Link href="https://www.medplan.com.br" target="_blank">Medplan</Link> e <Link href="https://inforgeneses.com.br/" target="_blank">Inforgeneses</Link>. Cursei Sistemas de Informação  na 
        FATEPI em 2014, depois que conheci programação comecei a estudar por conta própria, como sempre fiz, e assim consegui começar trabalhar 
        logo, como consequência, comecei a aprender bastante.
      </Paragraph>

      <Title>Habilidades</Title>

      <List>
        {technologies.map(tech => (
          <ListItem>{tech}</ListItem>
        ))}
      </List>
    </Screen>
  )
}

export default Home;
