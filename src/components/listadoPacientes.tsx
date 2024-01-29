import { FormValues } from "./formulario"

export const ListadoPacientes = ({pacientes} : {pacientes : FormValues[]}) => {
  return (
    <>
     <div className="flex-col font-bold text-3xl mb-10 ml-52 text-indigo-700">Listado de Pacientes
     {pacientes.map((paciente, index) => {
        return  <p className="text-gray-700 font-bold mt-8" key={index}>{paciente.mascota}</p>
        
     })}
     </div>
    
    </>
   
  )
}
