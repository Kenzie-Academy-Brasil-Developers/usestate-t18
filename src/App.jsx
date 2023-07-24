import { useState } from "react";

function App() {
   //const [variavel, funcaoParaModificarEssaVariavel] = useState(0);
   //funcaoParaModificarEssaVariavel(novoValor);
   //O estado é semelhante a uma variável no sentindo que é capaz de armazenar qualquer valor do Javascript (string, number, boolean, array, object)

   //O estado ao ter seu valor alterado, reconstrói tudo que está que vinculado com ele - isso se chama reatividade

   //O estado é imutável - ou seja não pode ser alterado de forma direta
   /*
   const [count, setCount] = useState(0);

   const addCount = () => {
      setCount(count + 1);
   };

   const removeCount = () => {
      setCount(count - 1);
   };
   */

   const [fruitList, setFruitList] = useState([
      {
         id: 1,
         name: "Banana",
         price: 15,
      },
      {
        id: 2,
        name: "Maçã",
        price: 10,
      }
   ]);

   //TUDO QUE ESTÁ RELACIONADO A UM ESTADO SE RECONSTROÍ QUANDO ELE ATUALIZA   

   const total = fruitList.reduce((prevValue, fruit) => {
    return prevValue + fruit.price
   }, 0);

   const addFruit = () => {
    const newItem = { id: 3, name: "Morango", price: 30};
    setFruitList([...fruitList, newItem]);
   }

   return (
      <div className="App">
         <button onClick={addFruit}>Adicionar fruta</button>
         {fruitList.map(fruit => (
          <li key={fruit.id}>
            {fruit.name}
          </li>
         ))}
         <p>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
      </div>
   );
}

export default App;

/* Contador
<h1>{count}</h1>
<p>{count.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
<button onClick={addCount}>+ contador</button>
<button onClick={removeCount}>- contador</button>
*/
