// rfce -rafce
import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [dueno, setDueno] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

//carga el fomrulario con los datos del paciente
  useEffect(() => {
    //  Object.keys = sirve para ver si un objeto esta vacio
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setDueno(paciente.dueno)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion del formulario
    if ([nombre, dueno, email, alta, sintomas].includes('')) {
      console.log('Hay Al Menos un campo vacio')
      setError(true)
      return
    }
    setError(false)

    const objPaciente = {
      nombre,
      dueno,
      email,
      alta,
      sintomas
    }

    if (paciente.id) {
      //Editando el registro
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      // nuevo registro
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }


    setNombre('')
    setDueno('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center capitalize'>seguimiento pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <Error><p>todos los campos son obligatorios</p></Error>}

        <div className='mb-5'>
          <label htmlFor="nombreMascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            id='nombreMascota'
            placeholder='Nombre De La Mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="nombreDueño" className='block text-gray-700 uppercase font-bold'>Nombre Dueño</label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            id='nombreDueño'
            placeholder='Nombre Del Dueño'
            value={dueno}
            onChange={(e) => setDueno(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Correo Electronico</label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="email"
            id='email'
            placeholder='Correo del Dueño'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="date"
            id='alta'
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea
            id="sintomas"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los Síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          >
          </textarea>
        </div>

        <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario


