const Paciente = ({ paciente, setPaciente, setPacientes,pacientes }) => {
  const { nombre, dueno, email, alta, sintomas, id } = paciente

  const handleEliminar = () => {

    const respuesta = confirm('Deseas eliminar este paciente?');

    if (respuesta) {
      const pacientesActualizados = pacientes.filter(elementoPaciente => elementoPaciente.id !== id);
      setPacientes(pacientesActualizados)
      console.log('pacientes actualizados');

    }
  }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case '>{nombre}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Dueño: {''}
        <span className='font-normal normal-case '>{dueno}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Correo Electronico: {''}
        <span className='font-normal normal-case '>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
        <span className='font-normal normal-case '>{alta}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case '>{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}

        >Editar</button>
        <button type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
          onClick={handleEliminar}
        >Eliminar</button>

      </div>
    </div>
  )
}

export default Paciente