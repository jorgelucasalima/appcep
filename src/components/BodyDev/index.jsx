import { Content, CardDev } from "./styles";
import { GrLinkedin, GrGithub, GrGoogle } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

export default function BodyDev (params) {
  return( 
    <Content>
      <CardDev>
        <div className="row">
          <div className="card">
            <h1>Redes e contatos</h1>
            <a href="https://www.linkedin.com/in/jorgelucaslima/"><GrLinkedin/> https://www.linkedin.com/in/jorgelucaslima/</a>
            <a href="https://github.com/jorgelucasalima/"><GrGithub/> https://github.com/jorgelucasalima/</a>
            <a href="jorgelucasalima@gmail.com"><GrGoogle/> jorgelucasalima@gmail.com</a>
            <a href="81995254581"><BsWhatsapp/> 81 9 9525-4581</a>
          </div>
        </div>
      </CardDev>
    </Content>
  )
} 