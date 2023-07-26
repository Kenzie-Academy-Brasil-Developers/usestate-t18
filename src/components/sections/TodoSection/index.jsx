import { useState } from "react";
import { TodoForm } from "../../forms/TodoForm";
import { TodoList } from "./TodoList";
// import { v4 as uuidv4 } from 'uuid'

export const TodoSection = () => {
   const [noteList, setNoteList] = useState([]);

   console.log(noteList);

   // PROPS - serve para eu mandar uma variável ou função de um arquivo para outro arquivo de componente

   const addNote = (formData) => {
      // uuid é um bibleoteca que fornece um função geradora de id únicos
      //const newNote = { ...formData, id: uuidv4() };
      // crypto.randomUUID é um método nativo gerador de id único
      const newNote = { ...formData, id: crypto.randomUUID() };
      setNoteList([...noteList, newNote]);
   };
   
   // Quais componentes precisam deste estado?

   const removeNote = (removeId) => {
      //splice é mutável (Não poderemos utilizar)
      const newNoteList = noteList.filter((note) => note.id !== removeId);
      setNoteList(newNoteList);
   };

   return (
      <section>
         <div className="container">
            <TodoForm addNote={addNote} />
            <TodoList noteList={noteList} removeNote={removeNote} />
         </div>
      </section>
   );
};
