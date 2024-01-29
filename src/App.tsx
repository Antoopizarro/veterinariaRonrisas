import { Header } from "./components/header"
import { Formulario, FormValues } from "./components/formulario"
import { ListadoPacientes } from "./components/listadoPacientes"
import { useState } from "react";
function App() {

  const [pacientes, setPacientes] = useState<FormValues[]>([]);


  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className="mt-12 p-3 md:flex">
      <Formulario setPacientes={setPacientes}/>
      <ListadoPacientes pacientes={pacientes}/>
     </div>
    </div>
      
  )
}

export default App
