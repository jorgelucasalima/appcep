import { Container } from "./styles";

export default function Card() {
  return(
    <Container>
      <div className="row">
        <div className="card">
          <h2>Localização</h2>
          <p>Endereço</p>
          <p>Bairro</p>
          <p>Cidade</p>
          <p>Estado</p>
        </div>
      </div>
    </Container>
    
  )
}