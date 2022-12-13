import { Route, Routes as RotasApp } from "react-router-dom";
import Home from "./pages/Home";
import Contato from './pages/Contato';

export default function Rotas() {
   return(
       <RotasApp>
           <Route index element={<Home />} />
           <Route path='/contato' element={<Contato/>}/>
       </RotasApp>
   )
}
