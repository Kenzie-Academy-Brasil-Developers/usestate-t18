import { useState } from "react";
import { TodoForm } from "../../forms/TodoForm";
import { TodoList } from "./TodoList";
// import { v4 as uuidv4 } from 'uuid'
import styles from "./style.module.scss";

export const TodoSection = () => {
   const [noteList, setNoteList] = useState([]);

   console.log(noteList);

   const addNote = (formData) => {
      const newNote = { ...formData, id: crypto.randomUUID() };
      setNoteList([...noteList, newNote]);
   };

   const removeNote = (removeId) => {
      const newNoteList = noteList.filter((note) => note.id !== removeId);
      setNoteList(newNoteList);
   };

   return (
      <section>
         <div className="container">
            <div className={styles.flexBox}>
               <TodoForm addNote={addNote} />
               <TodoList noteList={noteList} removeNote={removeNote} />
            </div>
         </div>
      </section>
   );
};
