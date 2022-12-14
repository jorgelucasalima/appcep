import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`  

  margin-top: 2rem;
  margin-left: 1rem;  

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

export const ContentCard = styled.div`
  margin-top: 1rem;

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    // botar uma condição para caso o cep for retornado ficar o border-left na cor verde
    border-left: 3px solid var(--fundo-navbar);
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 400px;
    transition: all 0.3s ease-out;
  }

  .card:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
  
  .card p {
    color: #a3a5ae;
    font-size: 16px;
  }
`