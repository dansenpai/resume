import React from 'react';
import Screen from '../../components/screen/screen';
import {Title, Subtitle, Paragraph, Card, Cards, CardBody, CardFooter, Link} from '../../components/shared.styles';
import {AppWrapper, Tech, AppDetails, Downloads, Stars, TechStack} from './portfolio.styles';

const Portfolio = () =>{

  return(
    <Screen>
      <Title>Alguns dos meus trabalhos</Title>
      <Cards>
        <Card>
          <CardBody>
            <AppWrapper>
              <Link href="https://play.google.com/store/apps/details?id=danielsantos.herokuapp.com" target="_blank">
                <img src={require('../../assets/images/lolstories.png')} />
              </Link>
              <TechStack>
                  <Subtitle>Libs Usadas</Subtitle>
                  <Tech>React Native / Redux </Tech>
                  <Tech>Styled Components</Tech>
                  <Tech>React Navigation</Tech>
                  <Tech>Async Storage</Tech>
                  <Tech>Axios</Tech>
                  <Tech>Firebase Storage</Tech>
                  <Tech>Watson Api</Tech>
              </TechStack>
            </AppWrapper>
          </CardBody>
          <CardFooter>
            <Subtitle>
              <Link href="https://play.google.com/store/apps/details?id=danielsantos.herokuapp.com" target="_blank">Lol Stories</Link>
            </Subtitle>
            <Paragraph>App para leitura das lores, histórias e quadrinhos de league of legends.</Paragraph>
            <AppDetails>
              <Stars>
                4,1 <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABA0lEQVR4AWMgBEpLS+MYKAFlZWWaJSUlP6urq6XJNgRowKzi4uL/QLqNLAMaGhpEgJq/gwwB4rd9fX2c5LiiFmQADAP56aS4gAkYmBJAjS/QDLkGxNwgF02aNIl95syZrEC1LCD1IBsLgIr2APElqMY/IE0k4BqQzVxAgzaRpBHhunK4F1atWsUMFJhKogFFuAKzFKjgHxEG5BGKlRYCBqwiJmonEjDkBDGG7CdgyFdwtOIDoNSJpOkfUNMh9HAC5il1fBlOBjlxlZeXW0FzsjWQfxEmB+SH48v2XkBFv4B0I9DJbBBRRDKAJsyPQNyO0xCgze5ArI3Pu1VVVZJAS5KQxQC83Tw70VP4pQAAAABJRU5ErkJggg=='/>
              </Stars>
              <Downloads>
                19K+
                <img src="https://cdn.onlinewebfonts.com/svg/img_395480.png" />
              </Downloads>
            </AppDetails>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <AppWrapper>
              <Link href="https://play.google.com/store/apps/details?id=com.inever" target="_blank">
                <img style={{padding: '20px'}} src={require('../../assets/images/inever.jpeg')} />
              </Link>
              <TechStack>
                  <Subtitle>Libs Usadas</Subtitle>
                  <Tech>React Native </Tech>
                  <Tech>Styled Components</Tech>
                  <Tech>React Navigation</Tech>
                  <Tech>Async Storage</Tech>
              </TechStack>
            </AppWrapper>
          </CardBody>
          <CardFooter>
            <Subtitle><Link href="https://play.google.com/store/apps/details?id=com.inever" target="_blank">Inever - Eu nunca</Link></Subtitle>
            <Paragraph>App popular para brincadeiras de 'Shot'</Paragraph>
            <AppDetails>
              <Stars>
                5,0 <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABA0lEQVR4AWMgBEpLS+MYKAFlZWWaJSUlP6urq6XJNgRowKzi4uL/QLqNLAMaGhpEgJq/gwwB4rd9fX2c5LiiFmQADAP56aS4gAkYmBJAjS/QDLkGxNwgF02aNIl95syZrEC1LCD1IBsLgIr2APElqMY/IE0k4BqQzVxAgzaRpBHhunK4F1atWsUMFJhKogFFuAKzFKjgHxEG5BGKlRYCBqwiJmonEjDkBDGG7CdgyFdwtOIDoNSJpOkfUNMh9HAC5il1fBlOBjlxlZeXW0FzsjWQfxEmB+SH48v2XkBFv4B0I9DJbBBRRDKAJsyPQNyO0xCgze5ArI3Pu1VVVZJAS5KQxQC83Tw70VP4pQAAAABJRU5ErkJggg=='/>
              </Stars>
              <Downloads>
                50+
                <img src="https://cdn.onlinewebfonts.com/svg/img_395480.png" />
              </Downloads>
            </AppDetails>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <AppWrapper>
              <Link href="https://play.google.com/store/apps/details?id=com.danielsantosdev.zapsemcontato" target="_blank">
                <img style={{padding: '20px'}} src={require('../../assets/images/zapsemcontato.webp')} />
              </Link>
              <TechStack>
                  <Subtitle>Libs Usadas</Subtitle>
                  <Tech>React Native </Tech>
                  <Tech>React Navigation</Tech>
                  <Tech>Async Storage</Tech>
              </TechStack>
            </AppWrapper>
          </CardBody>
          <CardFooter>
            <Subtitle><Link href="https://play.google.com/store/apps/details?id=com.danielsantosdev.zapsemcontato" target="_blank">Zap sem contato</Link></Subtitle>
            <Paragraph>App para abrir conversas de whatsapp sem precisar salvar o número, também salva um histórico de números abertos.</Paragraph>
            <AppDetails>
              <Stars>
                3,0 <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABA0lEQVR4AWMgBEpLS+MYKAFlZWWaJSUlP6urq6XJNgRowKzi4uL/QLqNLAMaGhpEgJq/gwwB4rd9fX2c5LiiFmQADAP56aS4gAkYmBJAjS/QDLkGxNwgF02aNIl95syZrEC1LCD1IBsLgIr2APElqMY/IE0k4BqQzVxAgzaRpBHhunK4F1atWsUMFJhKogFFuAKzFKjgHxEG5BGKlRYCBqwiJmonEjDkBDGG7CdgyFdwtOIDoNSJpOkfUNMh9HAC5il1fBlOBjlxlZeXW0FzsjWQfxEmB+SH48v2XkBFv4B0I9DJbBBRRDKAJsyPQNyO0xCgze5ArI3Pu1VVVZJAS5KQxQC83Tw70VP4pQAAAABJRU5ErkJggg=='/>
              </Stars>
              <Downloads>
                15k+
                <img src="https://cdn.onlinewebfonts.com/svg/img_395480.png" />
              </Downloads>
            </AppDetails>
          </CardFooter>
        </Card>
      </Cards>
    </Screen>
  )
}

export default Portfolio;
