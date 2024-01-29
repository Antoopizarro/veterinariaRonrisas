import { FormValues } from "./formulario"

export const ListadoPacientes = ({pacientes} : {pacientes : FormValues[]}) => {
  return (
    <>
     <div className="font-bold text-3xl mb-10 ml-52 text-indigo-700">Listado de Pacientes</div>
     {pacientes.map((paciente, index) => {
        <p key={index}>{paciente.mascota}</p>
     })}
    
    </>
   
  )
}
