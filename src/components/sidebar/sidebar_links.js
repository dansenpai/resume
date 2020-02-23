import React from 'react';
import { withRouter, Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkRouter = styled(BaseLink)`
  color: ${props => props.active ? '#651fff' : '#eee'};
  font-size: 25px;
  text-align: center;
  width: 100%;
  padding: 10px;
  background: ${props => props.active ? '#111' : 'transparent'} ;
  :hover{
    color: #aaa;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: 860px) {
    flex-direction: row;
  }
`;

const Link = props => {
  return(
    <LinkRouter active={props.active} to={props.link}>
      {props.text}
    </LinkRouter>
  )
};

const SidebarLinks = props => {
  const links = [
    {text: "About Me", link: "/home"},
    {text: "Portfólio", link: "/portfolio"},
  ]

  return (
    <LinksWrapper>
      {links.map((link, index) => (
        <Link key={index} text={link.text} link={link.link} active={props.match.path === link.link}/>
      ))}
    </LinksWrapper>
  )
};

export default withRouter(SidebarLinks);
