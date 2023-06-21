import React from 'react'
import { FcGoogle, FcHome, FcPhoneAndroid } from 'react-icons/fc'
import { FaWhatsapp } from 'react-icons/fa'
import BotonBase from './BotonBase'

const ContactosClient = () => {
  const mail = 'info.cxperiment@gmail.com'
  const watsapp = '541141568854'
  const ubicacion = 'Buenos Aires, Argentina'

  const handleEmailClick = (e) => {
    e.preventDefault()
    window.open(`mailto:${mail}`, '_blank')
  }

  const handlePhoneClick = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/${watsapp}`, '_blank')
  }

  const handleLocationClick = (e) => {
    e.preventDefault()
    window.open(`https://www.google.com/maps?q=${ubicacion}`, '_blank')
  }

  return (

    <section className='w-full h-auto md:w-[80%] lg:w-full xl:w-full xl:h-auto xl:max-w-[600px]  rounded-lg px-5 md:px-5 lg:px-0 xl:px-8 py-14 flex flex-col justify-center items-center gap-5 lg:gap-6 xl:gap-7 border-[.5px]'>
      <div className='w-full h-auto flex flex-col gap-4'>
        <h3 className='font-parrafo text-purpleBal  font-[700] text-lg uppercase'>Contactanos</h3>
        <h2 className='font-titulo text-purpleBal font-[700] text-5xl'>Conectemos hoy</h2>
        <p className='font-parrafo font-[400] text-lg text-[#333]'>Si necesitás una cotización o simplemente tenés curiosidad por saber más sobre alguno de los servicios, ¡Escribime!</p>
      </div>
      <div className='w-full h-auto flex flex-col gap-4'>
        <a
          href='#'
          className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
          onClick={handleEmailClick}
        >
          <FcGoogle className='text-2xl' />
          contacto@cxperiment.com
        </a>
        <a
          href='#'
          onClick={handlePhoneClick}
          className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
        >
          <FcPhoneAndroid className='text-2xl' />
          +54 11 41568854
        </a>
        <a
          href='#'
          onClick={handleLocationClick}
          className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
        >
          <FcHome className='text-2xl' />
          Buenos Aires, Argentina
        </a>
      </div>
      <div className='w-full h-auto flex justify-start items-center'>
        <BotonBase
          func={handlePhoneClick}
          name='Conecta'
          clase='botonVerde font-titulo font-[600] font-md lg:text-lg '
        >
          <FaWhatsapp className='text-2xl' />
        </BotonBase>
      </div>
    </section>
  )
}

export default ContactosClient
