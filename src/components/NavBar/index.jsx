import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function NavBar() {
  return(
    <Container>
      <Content>
        <h1>navbar</h1>
        <Link to='/contato'>Contato do Dev</Link>
      </Content>
    </Container>
  )
}