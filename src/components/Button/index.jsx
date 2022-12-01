import { useState } from 'react';
import { Container, Content } from './styles';
import api from './../../services/api';

export default function Button() {

  const [cepDigitado, setCepDigitado] = useState('')

  //o axios é uma promisse então tive que usar o await e botar a função como asyncrona
  async function getCep() {
    const retorno = await api.get(`50980360/json/`)
    console.log(retorno)
  }

  return(
    <Container>
      <Content>
        <input type="text" placeholder="CEP" value={cepDigitado}/>
        <button type='submit' onClick={getCep}>Buscar</button>
      </Content>  
    </Container>
    
  )
}