import { useEffect } from "react"
import Paciente from "./paciente"


const ListadoPacientes = ({ pacientes,setPaciente,setPacientes }) => {
  useEffect(()=>{
    if(pacientes.length>0){
      // console.log('nuevo paciente');
    }
  },[pacientes])
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {pacientes && pacientes.length ? (
        <div>
          <h2 className='font-black text-3xl text-center capitalize'>listado pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Administra Tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas </span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">

            {pacientes.map((paciente, index) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente ={setPaciente}
                setPacientes={setPacientes}
                pacientes = {pacientes}
                // eliminarPaciente={eliminarPaciente}

              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className='font-black text-3xl text-center capitalize'>No hay pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
           Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y aparecerán en este lugar </span>
          </p>
        </div>
      )}


    </div>
  )
}

export default ListadoPacientes
