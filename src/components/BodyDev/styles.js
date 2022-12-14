import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  align-items: center;
  margin-top: 2rem;
  margin: 2rem;
`

export const CardDev = styled.div`
  display: grid;  
  margin-top: 1rem;

  .row {
    display: flex;
    justify-content: center;
    align-items: centerd;
  }

  .card {
    // botar uma condição para caso o cep for retornado ficar o border-left na cor verde
    display: grid;
    border-left: 3px solid var(--fundo-navbar);
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 50px;
    width: 650px;
    transition: all 0.3s ease-out;

    a {
      //color: black;
      margin-top: 0.50rem;
      text-decoration: none;
      font-size: 1.50rem;
    }
  }

  .card:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
  
  .card p   {
    color: #a3a5ae;
    font-size: 16px;
  }
`