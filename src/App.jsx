import { useState } from "react";
import { Select } from "./components/forms/Select";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";

function App() {
   //const [value, setValue] = useState("");
   return (
      <div className="App">
         <HomePage />

         {/* <Select value={value}>
            <li role="menuitem" onClick={() => setValue("Desenvolvedor Full Stack")}>
               Desenvolvedor Full Stack
            </li>
            <li role="menuitem" onClick={() => setValue("UX/UI Designer")}>
               UX/UI Designer
            </li>
            <li role="menuitem" onClick={() => setValue("Instrutor")}>
               Instrutor
            </li>
         </Select> */}
      </div>
   );
}

export default App;
