import React, { useState } from "react";
import "../index.css";
import axios from "axios";

export interface ButtonProps {
  type: string;
  text: string;
  disabled?: boolean;
  func?: () => void;
}

const Button = ({ type, text, disabled, func }: ButtonProps) => {
  const [userName, setUserName] = useState("");
  const [response, setResponse] = useState();

  const handleInput = (e :React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const submit = (e: any) => {
    e.preventDefault();
     axios({
      method: "POST",
      url:"/serv_back",
      headers:{
        "Content-Type": "application/json",
      },
      data: {
        name: userName,
      }
    })
    .then(res => {
      setResponse(res.data)
      console.log(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h1>Ввод: </h1>
        <input type="text" onChange={handleInput} value={userName} />

        <button
          type="submit"
          className={type}
          disabled={disabled}
          onClick={func}
        >
          {text}
        </button>
        <h1>{response}</h1>
      </form>
    </div>
  );
};

export default Button;
