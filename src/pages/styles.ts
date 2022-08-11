import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  background: ${(props) => props.theme.backgroundColor};

  svg {
    color: ${(props) => props.theme.textColor};
    font-size: 6rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${(props) => props.theme.containerColor};

  .cardPokemon {
    button {
      margin-bottom: 1rem;
      height: 2rem;
      width: 100%;
    }
  }
`;

export const Footer = styled.footer`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${(props) => props.theme.backgroundColor};
  width: 100%;
  bottom: 0;
`;
