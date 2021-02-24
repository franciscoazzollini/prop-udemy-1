import React from 'react'
import Comentario from './components/Comentario';
import { Saludo } from './components/Saludo';

function App() {
  return (
    <div className = "container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona= "Ignacio" edad ={28}></Saludo>
      <Saludo persona= "Pedro" edad ={29}></Saludo>
      <Saludo persona= "Julian" edad ={30}></Saludo>
      <hr />
      
      <h3>Cajita de comentarios</h3>
    
      <Comentario 
        urlImagen="https://picsum.photos/64"
        persona="Ignacio"
        texto="comentario de ignacio"
      />

      <Comentario 
        urlImagen="https://picsum.photos/64"
        persona="Pedro"
        texto="comentario de Pedro"
      />

      <Comentario 
        urlImagen="https://picsum.photos/64"
        persona="Julian"
        texto="comentario de Julian"
      />
      
    </div>
  );
}

export default App;
