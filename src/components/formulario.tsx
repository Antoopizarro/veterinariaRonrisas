import { InputForm } from "./inputForm";
import { useForm } from "../hooks/useForm";
import { Dispatch, FormEvent, SetStateAction } from "react";

export interface FormValues {
    mascota: string;
    dueño: string;
    raza: string;
    email: string;
    numero: string;
    descripcion: string;
}

export const Formulario = ({setPacientes} : {setPacientes : Dispatch<SetStateAction<FormValues[]>>}) => {

    const {formValues, handleChange} = useForm<FormValues>({
        mascota: "",
        raza: "",
        dueño: "",
        email: "",
        numero: "",
        descripcion: "",
    })

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();

        setPacientes((prev: FormValues[]) => {
            return[...prev, formValues];
        });
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-3xl mb-10 text-center">
        Registrar <span className="text-indigo-700">Nuevo Paciente</span>
      </h2>
      <form className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        <InputForm 
        label="Mascota"
        name="mascota"
        type="text"
        placeholder="Nombre de la mascota"
        onChange={handleChange}
        />
        <InputForm 
        label="Raza"
        name="raza"
        type="text"
        placeholder="Raza de la mascota"
        onChange={handleChange}
        />
        <InputForm 
        label="Dueño"
        name="dueño"
        type="text"
        placeholder="Nombre y Apellido del dueño"
        onChange={handleChange}
        />
        <InputForm 
        label="Email"
        name="email"
        type="email"
        placeholder="Email del dueño"
        onChange={handleChange}
        />
        <InputForm 
        label="Número"
        name="numero"
        type="text"
        placeholder="Número de telefono del dueño"
        onChange={handleChange}
        />
        <InputForm 
        label="Descripcion"
        name="descripcion"
        type="text"
        placeholder="Descripción"
        onChange={handleChange}
        />
       
        <button className="text-white bg-indigo-680 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">
            Agregar Paciente
        </button>
      </form>
    </div>
  );
};
