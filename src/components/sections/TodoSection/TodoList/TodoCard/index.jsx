import styles from "./style.module.scss";

export const TodoCard = ({ title, id, message, category, removeNote }) => {
   return (
      <li
         className={`
            ${styles.todoCard} 
            ${category === "tarefas" ? styles.orange : styles.blue}`}
      >
         <h2 className="title two">{title}</h2>
         <p className="paragraph">{message}</p>
         <button className="btn sm" onClick={() => removeNote(id)}>
            Excluir
         </button>
      </li>
   );
};
