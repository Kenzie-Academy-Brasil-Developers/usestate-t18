import styles from "./style.module.scss"

export const Textarea = ({ label, id, placeholder, required, value, setValue }) => {
   return (
      <div className={styles.textAreaBox}>
         <label className="paragraph" htmlFor={id}>{label}</label>
         <textarea
            placeholder={placeholder}
            name={id}
            id={id}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required={required}
         ></textarea>
      </div>
   );
};
