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
    "CSS Frameworks (Bulma, Bootstrap)",
    "Javascript", 
    "Angular Js", 
    "Self-taught, I learn very fast"
  ]

  return(
    <Screen>
      <Title>About me</Title>

      <Paragraph>
        My name is Daniel Santos, I'm living in São Paulo - SP, I'm a Fullstack developer with focus on Frontend. I currently work for <Link target="_blank" href="https://tradersclub.com.br/">TradersClub</Link> i have also worked remotly for
        <Link href="http://vizir.com.br" target="_blank"> Vizir Sofware Studio </Link> and in my spare time i program a little more, play games and try to learn play guitar.
      </Paragraph>

      <Paragraph>
        In Teresina - PI, I have already worked at <Link href="https://www.medplan.com.br" target="_blank">Medplan</Link> and <Link href="https://inforgeneses.com.br/" target="_blank">Inforgeneses</Link>. I have studied Information System's at
        FATEPI in 2014, after i got to know programming I started to study on my own, as i always did, and so i was able to start working soon, as a consequence, I started  to learn a lot.
      </Paragraph>

      <Title>Habilities</Title>

      <List>
        {technologies.map(tech => (
          <ListItem>{tech}</ListItem>
        ))}
      </List>
    </Screen>
  )
}

export default Home;
