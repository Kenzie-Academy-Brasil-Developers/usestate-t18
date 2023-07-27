import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";
import styles from "./style.module.scss";

export const TodoForm = ({ addNote }) => {
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState("");
   const [category, setCategory] = useState("tarefas");

   const submit = (event) => {
      event.preventDefault();
      addNote({ title, message, category });
      setTitle("");
      setMessage("");
      setCategory("tarefas");
   };

   return (
      <div className={styles.formBox}>
         <h2 className="title two">Cadastre uma nota</h2>
         <form onSubmit={submit}>
            <Input
               label="Título: "
               placeholder="Título da nota"
               type="text"
               id="title"
               value={title}
               setValue={setTitle}
               required={true}
            />
            <Textarea
               label="Mensagem:"
               placeholder="Mensagem"
               id="message"
               value={message}
               setValue={setMessage}
               required={true}
            />
            <Select
               label="Categoria: "
               id="category"
               value={category}
               setValue={setCategory}
            >
               <option value="tarefas">Tarefas</option>
               <option value="recados">Recados</option>
            </Select>
            <button className="btn lg full" type="submit">
               Criar nota
            </button>
         </form>
      </div>
   );
};
