import { ChangeEvent , useState } from "react";

export const useForm = <T> (initialState : T) => {

    const [formValues, setFormValues] = useState(initialState);

    const handleChange = ({ target } : ChangeEvent<HTMLInputElement>) => {
        setFormValues({
           ...formValues,
            [target.name]: target.value
        })
    }

    const reset = ( resetState : T  ) => {
        setFormValues(resetState);
        console.log(resetState);
    }

  return {
    formValues,
    handleChange,
    reset
  }
}
