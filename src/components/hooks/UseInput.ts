
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
type Props = {
    validator: (value:string) => boolean;
}
const useInput = ({validator}:Props) => {
    const [value, setValue] = useState('');
    const [istouch, settouch] = useState(false);
    
    const valueisvalid = validator(value);
    const haserror = !value && istouch 

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      }
    
    const inputblurHandler = (event:DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> ) => {
        settouch(true)
    }

    const resetValues = () => {
        setValue('');
        settouch(false);
    }
    return { value, haserror, valueisvalid,resetValues, valueChangeHandler,inputblurHandler };
    }
    export default useInput;
    