import React, { useRef } from 'react'
import SectionHeader from './SectionHeader'
import { samurai1Img, samurai2Img, samurai3Img } from '../../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../../utils/animations'
import CodigoImg from './CodigoImg'

const Codigo = () => {
  const descriptionRef = useRef()
  const sectionTitle = useRef()
  const sectionSubtitle = useRef()
  const sliderRef = useRef() // Ahora el ref apunta al contenedor, no a cada imagen
  
  const imgList = [samurai1Img, samurai2Img, samurai3Img]

  useGSAP(() => {
    animateWithGsap(descriptionRef.current)

    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // yoyo: true hace que regrese
  
    imgList.forEach((_, index) => {
      tl.to(sliderRef.current, {
        xPercent: (-100 / imgList.length ) * index, // Se mueve progresivamente a cada imagen
        duration: 1, // Transición de imagen
        ease: "power2.inOut",
      }).to({}, { duration: 2 }); // Pausa 2 segundos en cada imagen
    });
  });

  return (
    <section className='home-sections flex flex-col py-6 px-8 md:py-16 md:px-36' id='Codigo'>
      
      <SectionHeader sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} title={'CODIGO'}/>

      {/* Contenedor del carrusel */}
      <div className='relative w-full overflow-hidden mb-5 md:mb-10'>
        <div className="flex w-max" ref={sliderRef}>
          {imgList.map((img, index) => ( // Duplica imágenes para loop infinito
            <CodigoImg img={img} key={index}/>
          ))}
        </div>
      </div>

      <div className='flex justify-center w-full mb-10'>
        <h3 className='w-[90%] md:w-[50%] text-justify md:text-center text-sm md:text-xl' ref={descriptionRef}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores architecto sunt quasi magni assumenda, ex, repudiandae laboriosam odit quae animi nostrum debitis. Qui laudantium id nostrum error assumenda delectus voluptates.
        </h3>
      </div>

    </section>
  )
}

export default Codigo
