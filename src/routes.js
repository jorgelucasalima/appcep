import { Route, Routes as RotasApp } from "react-router-dom";
import Home from "./pages/Home";

export default function Rotas() {
   return(
       <RotasApp>
           <Route index element={<Home />} />
       </RotasApp>
   )
}
