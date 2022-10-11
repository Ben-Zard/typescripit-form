

import { DetailedHTMLProps, InputHTMLAttributes, useState,useReducer } from "react";
type Props = {
    validator: (value:string) => boolean;
}

interface initalstate{
    value:string;
    istouch:boolean;
}
type Action =
 | { type: 'input', value: string }
 | { type: 'blur'}
 | { type: 'reset' };
const initalstate = {
    value: '',
    istouch: false
}
const inputreducer = (state:initalstate,action:Action) => {
    const { type,} = action;
    switch (type) {
      case "input":
        return {
          ...state,
          value: action.value,
        };
      case 'blur':
        return {
          ...state,
          istouch: true,
        };
        case 'reset':
        return {
          ...state,
          istouch: false,
            value: '',
        };
      default:
        return state;
    }
}
const useInputReducer = ({validator}:Props) => {
  const [inputstate,dispatch] = useReducer(inputreducer,initalstate);
    


    const valueisvalid = validator(inputstate.value);
    const haserror = !valueisvalid && inputstate.istouch 

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:'input',value:event.target.value});
      }
    
    const inputblurHandler = (event:DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> ) => {
        dispatch({type:'blur'});
    }

    const resetValues = () => {
        dispatch({type:'reset'});

    }
    return { value :inputstate, haserror, valueisvalid,resetValues, valueChangeHandler,inputblurHandler };
    }
    export default useInputReducer;
    