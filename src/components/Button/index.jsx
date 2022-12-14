import { useState } from 'react';
import { Container, Content, ContentCard } from './styles';
import api from './../../services/api'

export default function Button() {

  const [cepDigitado, setCepDigitado] = useState('')
  const [cepSalvo, setCepSalvo] = useState([])


  //Função de pegar o cep via api
  async function getCep(event) {
    event.preventDefault()
  
    const response = await api.get(`${cepDigitado}/json/`)
    .then((response) => {
      //console.log('o response é:' , response)
      setCepSalvo(response.data)
    })
    .catch((error) => {
      console.log('o erro: ', error)
    })
  }

  console.log('CEP SALVO: ', cepSalvo)
  //console.log('CEP DIGITADO: ', cepDigitado)


  return(
      <Container>
        <Content>
          <form onClick={getCep}>
            <input 
              type="text" 
              placeholder="CEP"
              value={cepDigitado}
              onChange={(event) => setCepDigitado(event.target.value)}
            />
            <button type='submit'>Buscar</button>
          </form>
        </Content>  
        <ContentCard>
          <div className="row">
            <div className="card">
              <h2>Localização</h2>
              <p>Endereço: {cepSalvo.logradouro}</p>
              <p>Bairro: {cepSalvo.bairro}</p>
              <p>Cidade: {cepSalvo.localidade}</p>
              <p>Estado: {cepSalvo.uf}</p>
            </div>
          </div>
        </ContentCard>
      </Container>
  )
}