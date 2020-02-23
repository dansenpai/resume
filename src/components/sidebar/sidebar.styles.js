import styled from 'styled-components';

export const SidebarWrapper = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  background-color: rgba(0,0,0,0.9);
  height: 100vh;
  padding: 30px;

  @media (max-width: 860px) {
    flex: 1;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(0,0,0,1);
    height: 280px;
    padding: 30px;
  }
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  background: #eee;
  border-radius: 50%;
  margin: 10px;

  @media (max-width: 860px) {
    height: 120px;
    width: 120px;
    margin-right: 50px;
  }

  @media (max-width: 461px) {
    height: 80px;
    width: 80px;
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #eee;
  font-weight: bold;
`

export const Subtitle = styled.h2`
  font-size: 20px;
  color: #eee;
`

export const TopItems = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 860px) {
    flex-direction: row;
  }
`