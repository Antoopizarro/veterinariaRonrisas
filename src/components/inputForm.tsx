import { ChangeEvent } from "react";

type InputType = 'text' | 'email' | 'password' | 'number' | 'date' | 'tel' | 'color' | 'file';

export interface InputFormProps {
  label: string;
  name : string;
  type: InputType;
  placeholder?: string;
  className? : string;
  error? : string;
  value: string;
  onChange? : (e : ChangeEvent<HTMLInputElement>) => void;
  
}
export const InputForm = ({ 
    label,
    name, 
    type, 
    placeholder, 
    className,
    error,
    value,
    onChange
}: InputFormProps) => {
  return (
    <div className={`mb-5 ${className}`}>
      <label 
      htmlFor={name}
      className="block text-gray-700 uppercase font-bold"
      >
        {label}
        </label>
      <input 
      id={name} 
      name={name} 
      value={value}
      type={type} 
      placeholder={placeholder} 
      className={`border w-full p-2 mt-2 placeholder-gray-500 ${className} ${error ? 'border-red-700' : 'border-gray'}` } 
      onChange={onChange}
      />

    <p className="text-sm text-red-700 ms-2">{error}</p>
    </div>
  );
};
