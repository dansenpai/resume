import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/sidebar';

const  ScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 40px  40px 340px;
  max-height: 100vh;
  overflow: auto;
  @media (max-width: 860px) {
    padding: 300px 20px  20px 20px;
  }
`;

const Screen = props => {

  return (
    <ScreenWrapper>
      <Sidebar />
      {props.children}
    </ScreenWrapper>
  )
}

export default Screen;
