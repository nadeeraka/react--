import React, { useState } from "react";
import { Form } from "./form";
import { string } from "prop-types";
type FormEl = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  completed: boolean;
}

export const Logic = (): JSX.Element => {
  const [value, setvalue] = useState<string>("");
  const [todos, settodos] = useState<ITodo[]>([]);
  const handelChange = (e: FormEl):void => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  };

  const checkValid = (text: string): boolean => {
    let item = todos.filter((data: ITodo) => data.text === text);
     if (item.length!== 0) {
      return false;
    }
    return true;
  };
  const addTodo = (text: string):void => {
    let res: boolean = checkValid(text);
      if (text && res) {
      let newArray: ITodo[] = [...todos, { text, completed: false }];
      settodos(newArray);
    }


  };
  const handelChecked =(s:string):void=>{
    let filterdArray = todos.filter((data: ITodo) => data.text !== s);
    console.log(filterdArray);
    settodos(filterdArray);
    
  }
  return (
    <div>
      <form action="" onSubmit={handelChange}>
        <input
          type="text"
          onChange={e => setvalue(e.target.value)}
          value={value}
          name=""
          id=""
        />
        <button type="submit">Submit</button>
        {todos.map((data: ITodo, index: number) => {
          return (
            <p key={index}>
              {data.text} <button onClick={index=>handelChecked(data.text)}>Completed</button>
            </p>
          );
        })}
      </form>
    </div>
  );
};
