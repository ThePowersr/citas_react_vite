const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id}= paciente
    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <div  className="mx-5 bg-white shadow-md md:px-3.5 py-10 p-5 rounded-xl mb-5">
            <p className="font-bold mb-3 text-gra-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gra-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gra-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gra-700 uppercase">Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gra-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="md:flex md:justify-between mt-10 ">
                <button 
                type="button" 
                className="py-2 px-10 bg-indigo-600 text-white hover:bg-indigo-700 font-bold uppercase rounded-lg block w-full md:w-2/5"
                onClick={() =>setPaciente(paciente)}
                >Editar</button>
                <button 
                type="button"
                className="py-2 px-10 bg-red-600 text-white hover:bg-red-700 font-bold uppercase rounded-lg md:mx-2 mt-3 md:mt-0 block w-full md:w-2/5" 
                onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
