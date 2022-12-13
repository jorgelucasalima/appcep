import styled from 'styled-components';

export const Container = styled.div`
  display: flex
  align-items: center;
  padding: 1rem
`;

export const Content = styled.div`  

  input {
    padding: 0 1rem;
    height: 3rem;
    width: 10rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1.20rem;

    margin-right: 0.70rem;
  }

  button {
    padding: 0 1rem;
    height: 3rem;
    width: 14rem;
    border-radius: 0.25rem;
    background: var(--fundo-navbar);
    border: none;

    font-weight: 400;
    font-size: 1.20rem;

    color: var(--texto-branco);

    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

`