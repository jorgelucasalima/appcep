import styled from "styled-components";

export const Container = styled.div`
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