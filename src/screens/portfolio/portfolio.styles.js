import styled from 'styled-components';

export const AppDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  img {
    height: 20px;
    width: 20px;
    margin-left: 5px;
    margin-bottom: 2px;
  }
`;

export const Downloads = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  img {
    height: 20px;
    width: 20px;
    margin-left: 5px;
    margin-bottom: 2px;
  }
`;

export const TechStack = styled.div`
  padding: 20px;
`

export const AppWrapper = styled.div`
  display: flex;
`

export const Tech = styled.div`

  display: flex;
  align-items: center;

  @media (max-width: 860px) {
    font-size: 13px;  
  }
`