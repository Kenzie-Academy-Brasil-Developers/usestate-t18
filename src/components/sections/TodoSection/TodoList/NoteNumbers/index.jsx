import styles from "./style.module.scss";

export const NoteNumbers = ({noteNumber, totalChar}) => {
    return(
        <div className={styles.numberBox}>
            <span className="paragraph">Notas: <strong>{noteNumber}</strong></span>
            <span className="paragraph">Caracteres: <strong>{totalChar}</strong> </span>
        </div>
    )
}