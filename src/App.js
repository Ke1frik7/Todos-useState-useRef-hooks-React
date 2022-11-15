import React from "react";
import { TodoList, TodoInput, Locals } from "./Components";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
function App() {
  let [defaultArray, setArray ] = React.useState([])
  return (
    <div className="App d-flex align-items-center w-100">
      <div className="w-25 text text-center">
      <Locals/>
      </div>
      <div style={{width: "75%"}}>
     
      <TodoInput setArray={setArray}/>
    <TodoList defaultArray={defaultArray} setArray= {setArray}/>
      </div>
    </div>
  );
}

export default App;
