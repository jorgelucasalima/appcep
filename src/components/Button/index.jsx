import { Container, Content } from './styles';

export default function Button() {
  return(
    <Container>
      <Content>
        <input type="text" placeholder="CEP" />
        <button>Buscar</button>
      </Content>  
    </Container>
    
  )
}