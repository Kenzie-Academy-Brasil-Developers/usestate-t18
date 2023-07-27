import styles from "./style.module.scss"

export const Input = ({ label, id, type, placeholder, required, value, setValue }) => {
   return (
      <div className={styles.inputBox}>
         <label className="paragraph" htmlFor={id}>{label}</label>
         <input
            placeholder={placeholder}
            type={type}
            name={id}
            id={id}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required={required}
         />
      </div>
   );
};
