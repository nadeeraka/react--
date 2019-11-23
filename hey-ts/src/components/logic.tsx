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
        e.preventDefault()
        addTodo(value)
        
        setvalue('')
    }

    const addTodo=(text:string)=>{
        let newArray:ITodo[] = [...todos,{text,completed:false}] 
      settodos(newArray);
    }
    return (
        <div>
            <form action="" onSubmit={handelChange}>
                <input type="text" onChange={e=>setvalue(e.target.value)}  value={value} name=""  id=""/>
                <button type='submit'>Submit</button>
                {todos.map((data:ITodo,index:number)=>{
                return <p key={index}>{data.text}</p>
                })}
            </form>
        </div>
    )
}
