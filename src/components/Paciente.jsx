const Paciente = ({paciente}) => {

    const { nombre, propietario, email, alta, sintomas} = paciente

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
        </div>

    )
}

export default Paciente