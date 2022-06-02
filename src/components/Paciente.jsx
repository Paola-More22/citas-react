
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, alta, sintomas, id} = paciente

    const handleEliminar = () => {
       const respuesta = confirm("Deseas eliminar este paciente");

       if(respuesta) {
           eliminarPaciente(id)
       }
    }

    return (
        <div className="m-5 bg-white shadow-md px-5 py-4 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase text-xs">Nombre de la Mascota: {" "}
                <span className="font-normal normal-case text-xs">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase text-xs">Nombre del propietario: {" "}
                <span className="font-normal normal-case text-xs">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase text-xs">Email: {" "}
                <span className="font-normal normal-case text-xs">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase text-xs">Fecha Alta: {" "}
                <span className="font-normal normal-case text-xs">{alta}1</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase text-xs">Síntomas: {" "}
                <span className="font-normal normal-case text-xs">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase text-xs rounded-md"
                    onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase text-xs rounded-md"
                    onClick={handleEliminar}>
                    
                    Eliminar
                </button>
            </div>
        </div>

    )
}

export default Paciente