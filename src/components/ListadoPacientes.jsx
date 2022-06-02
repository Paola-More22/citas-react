import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ml-0 mr-0">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-xl text-center">Listado Pacientes</h2>
                    <p className="text-sm text-center mb-3">
                        Administra tus {" "}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( ( paciente ) =>
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    )}
                </>
            ):(
                <>
                    <h2 className="font-black text-xl text-center">No hay pacientes</h2>
                        <p className="text-sm text-center mb-3">
                            Comienza agragando pacientes {" "}
                            <span className="text-indigo-600 font-bold">y aparecerán en este lugar </span>
                        </p>
                </>
            )}


        </div>
    )
}

export default ListadoPacientes