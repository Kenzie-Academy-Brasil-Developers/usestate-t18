import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss"

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Lex Note" />
            </div>
         </div>
      </header>
   );
};
