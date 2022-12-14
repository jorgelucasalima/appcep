import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function NavBar() {
  return(
    <Container>
      <Content>
        <Link to="/">Home</Link>
        <Link to='/contato'>Contato do Dev</Link>
      </Content>
    </Container>
  )
}