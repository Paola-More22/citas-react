function App() {
  // antes del retunr para crear funciones o validaciones
  const sumar = () => {
    console.log( 2 + 2 )
  }
  
  sumar();

  // dsps del retunr es la parte visible de nuestro programa
  return (
    <>
      <div>
        <h1> Hola Mundo </h1>
      </div>
      <div>
        <h1> Hola Mundo </h1>
      </div>
    </>
  )
}

// un elemento que tiene apertura y cierre debe tener las dos etiquetas
// si solo tiene una apertura colocar diagonal al final
// cada componenete debe tener un return
// solo puedo retornar maximo un elemento en el nivel masa alto

export default App
