import React,{useState} from 'react'
import { Form } from "./form";
import { string } from 'prop-types';
type FormEl = React.FormEvent<HTMLFormElement>

interface ITodo {
    text:string
    completed: boolean
}

export const Logic = ():JSX.Element => {
    const [value, setvalue] = useState<string>('');
    const [todos, settodos] = useState<ITodo[]>([]);
    const handelChange =(e:FormEl)=>{
        setvalue('')
    }
    return (
        <div>
            <form action="">
                <input type="text" onChange={e=>setvalue(e.target.value)}  value={value} name=""  id=""/>
            </form>
        </div>
    )
}
