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
    <section className='home-sections flex flex-col py-6 px-8 md:py-16 md:px-36 bg-zinc-900'>

      <SectionHeader sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} title={'MODELO Z25'} colored={true}/>    

      <div className='flex justify-center mx-auto w-[30rem] h-[30rem] mb-10'>
        <ModelViewer />
      </div>

      <div className='flex flex-col md:flex-row w-full h-fit gap-10 mb-10 px-5' ref={textRef}>
        <div className='flex flex-1 flex-col text-justify text-sm md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corporis corrupti dolorum, fugiat in quaerat vel, sapiente 
          vero dolor nam beatae placeat earum. Voluptate repellat, 
          aspernatur voluptates animi est harum placeat!
        </div>
        <div className='flex flex-1 flex-col text-justify text-sm md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corporis corrupti dolorum, fugiat in quaerat vel, sapiente 
          vero dolor nam beatae placeat earum. Voluptate repellat, 
          aspernatur voluptates animi est harum placeat!
        </div>
      </div>

    </section>
  )
}

export default ModeloZ25