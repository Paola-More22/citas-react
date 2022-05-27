import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import './index.css'

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-5 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
