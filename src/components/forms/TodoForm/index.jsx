import { useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

export const TodoForm = () => {
   const [title, setTitle] = useState("Valor inicial de exemplo");
   const [message, setMessage] = useState("");

   const submit = (event) => {
      event.preventDefault();
      console.log({ title, message });
      setTitle("");
      setMessage("");
   };

   return (
    <div>
        <h2 className="title two">Cadastre uma nota</h2>
        <form onSubmit={submit}>
         <Input
            label="Título: "
            placeholder="Título da nota"
            type="text"
            id="title"
            value={title}
            setValue={setTitle}
         />
         <Textarea 
            label="Mensagem:"
            placeholder="Mensagem"
            id="message"
            value={message}
            setValue={setMessage}
         />
         <button className="btn lg full" type="submit">Criar nota</button>
      </form>
    </div>
      
   );
};
