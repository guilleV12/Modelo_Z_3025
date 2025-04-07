import React, { useRef } from 'react'
import SectionHeader from './SectionHeader'
import ModelViewer from '../Model/ModelView'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { animateWithGsap } from '../../utils/animations'

gsap.registerPlugin(ScrollTrigger)

const ModeloZ25 = () => {
  const sectionTitle = useRef()
  const sectionSubtitle = useRef()
  const textRef = useRef()

  useGSAP(() => {
    animateWithGsap(textRef.current)
  })


  return (
    <section className='home-sections flex flex-col py-6 px-8 md:py-16 md:px-36 bg-zinc-900 h-full' id='Modelo'>

      <SectionHeader sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} title={'MODELO'} colored={true}
        subtitleContent={'Hecha un vistazo al prototipo actual del modelo Z 3025.'}
      />    

      <div className='flex justify-center mx-auto w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] mb-10'>
        <ModelViewer />
      </div>

      <div className='flex flex-col md:flex-row w-full h-fit gap-10 mb-10 px-5' ref={textRef}>
        <div className='flex flex-1 flex-col text-justify text-sm md:text-lg'>
          El modelo Z-25 fusiona inteligencia artificial avanzada con biomecánica de última generación. Diseñado para adaptarse, aprender y evolucionar, representa el equilibrio perfecto entre eficiencia, resistencia y conciencia operacional.
        </div>
        <div className='flex flex-1 flex-col text-justify text-sm md:text-lg'>
          Creado para entornos extremos, el Z-25 ejecuta tareas tácticas, médicas y exploratorias. Su núcleo sintético late con propósito: proteger, analizar y actuar con precisión más allá de los límites humanos.
        </div>
      </div>

    </section>
  )
}

export default ModeloZ25