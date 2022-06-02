import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas) 
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del Formulario
        if ([nombre, propietario, email, alta, sintomas].includes('')){
            console.log("Hay al menos uno campo vacio")
            setError(true)
            return;
        }

        setError(false)

        // Objeto de Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
        };

        if(paciente.id){
            // Editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(PacienteState => PacienteState.id === paciente.id ? objetoPaciente : PacienteState)
            setPacientes(pacientesActualizados);
            setPaciente({})

        } else {
            // Nuevo resgistro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Reiniciando formulario
        setNombre("")
        setPropietario("")
        setEmail("")
        setAlta("")
        setSintomas("")

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 ml-5">

            <h2 className="font-black text-xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-sm mt-2 text-center mb-3">
                Añade Pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg py-5 px-5 mb-10 mr-5"
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-2">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold text-xs">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xs"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold text-xs">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xs"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold text-xs">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto propietario"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xs"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold text-xs">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xs"
                        value={alta}
                        onChange={ (e) => setAlta(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold text-xs">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md text-xs"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold text-xs
                    hover:bg-indigo-700 cursor-pointer rounded-md"
                    value={paciente.id ? "Editar Paciente" : "Agragar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario