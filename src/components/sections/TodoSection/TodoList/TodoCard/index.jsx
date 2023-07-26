export const TodoCard = ({ title, id, message, removeNote }) => {
    return(
        <li>
            <h2 className="title two">{title}</h2>
            <p className="paragraph">{message}</p>
            <button className="btn sm" onClick={() => removeNote(id)}>Excluir</button>
        </li>
    )
}