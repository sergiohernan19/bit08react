import { useState } from 'react'
import "./App.css";
import Button from "react-bootstrap/Button";
import { Formulario } from "./Componentes/Formulario";
function App() {
  const [tarea, setTarea] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT");
  }

function handleChange(e) {
  setTarea(e.target.value)
  console.log(tarea)
}

  return (
    <div className="contenedorPrincipal">
      <h1> Marcas de Autos </h1>
      <div className="contenedorFormulario">
        <Formulario
        tarea={tarea}
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
