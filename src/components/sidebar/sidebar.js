import React from 'react';
import {SidebarWrapper, Avatar, Title, Subtitle, TopItems} from './sidebar.styles';
import SocialMedia from '../social_media/social_media';
import SidebarLinks from './sidebar_links';

const Sidebar = props => {
    return (
    <SidebarWrapper>
      <TopItems>
        <Avatar src={require('../../assets/images/photo1.png')} />
        <div>
          <Title>Daniel Santos</Title>
          <Subtitle>Frontend Developer</Subtitle>
          <SocialMedia />
        </div>
      </TopItems>

      <SidebarLinks />
    </SidebarWrapper>
    )
}

export default Sidebar;
