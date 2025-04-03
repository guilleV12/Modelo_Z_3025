import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { spinner1 } from '../../utils'
import { animateWithGsap } from '../../utils/animations'

gsap.registerPlugin(ScrollTrigger)

const SectionHeader = ({ sectionTitle, sectionSubtitle, title, colored }) => {
  const spinner = useRef()

  useGSAP(() => {
      animateWithGsap([sectionTitle.current, sectionSubtitle.current])

      gsap.to(spinner.current, {
        rotate: "+=360", // Se acumula y gira continuamente
        duration: 1, 
        repeat: -1, 
        ease: "none",
        scrollTrigger: {
          trigger: spinner.current,
        }
      })
  })

  return (
    <>
    <div className='flex w-full justify-between items-center mb-5 md:mb-10' ref={sectionTitle}>
      <h1 className='neon-text font-semibold text-5xl'>{title}</h1>
      <img src={spinner1} alt="spinner" className='h-20' ref={spinner}/>
    </div>

    <div className='flex w-full justify-start items-center mb-5 md:mb-10'>
      <h1 className={`font-semibold text-2xl md:text-4xl ${colored && 'text-zinc-500'}`} ref={sectionSubtitle}>Lorem ipsum dolor dolor.</h1>
    </div>
    </>
  )
}

export default SectionHeader