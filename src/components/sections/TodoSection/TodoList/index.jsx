import { NoteNumbers } from "./NoteNumbers";
import { TodoCard } from "./TodoCard";
import styles from "./style.module.scss";

// SE estiver de um jeito
// Eu vou ter um resultado A
// Se estiver de outro eu vou ter resultado B
/*
if(noteList.length > 0){
   return <ul> ... </ul>
} else {
   return <p>Cadastre sua primeira nota!</p>
}
// Condição Ternária
tiverDeUmJeito ? fareiisso : fareiaquilo
condicao ? resposta verdadeira : resposta falsa
NO JSX - ele serve para fazer condições
Qualquer condição?
QUALQUER CONDIÇÃO!
Qualquer condição?
QUALQUER CONDIÇÃO!
*/

export const TodoList = ({ noteList, removeNote }) => {
   //JS
   const totalChar = noteList.reduce((prevValue, note) => {
      return prevValue + note.title.length + note.message.length;
   }, 0);

   //JSX
   return (
      <div className={styles.todoList}>
         <h1 className="title one">Lista de notas</h1>
         <NoteNumbers noteNumber={noteList.length} totalChar={totalChar} />
         {noteList.length > 0 ? (
            <ul>
               {noteList.map((note) => (
                  <TodoCard
                     key={note.id}
                     id={note.id}
                     category={note.category}
                     title={note.title}
                     message={note.message}
                     removeNote={removeNote}
                  />
               ))}
            </ul>
         ) : (
            <p className="paragraph">Cadastre sua primeira nota!</p>
         )}
      </div>
   );
};
