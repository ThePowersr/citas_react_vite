import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="mt-5 text-center mb-10 text-lg">Administra tus  {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span> </p>
          <div className="md:h-screen md:overflow-y-scroll">
            { pacientes.map( paciente => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="mt-5 text-center mb-10 text-lg">Comienza agregando pacientes  {''} <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span> </p>
        </>
      )}

      
    </div>
  )
}

export default ListadoPacientes
