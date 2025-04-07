import React, { useRef } from 'react'
import { welcomeVideo } from '../../utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Welcome = () => {
  const videoRef = useRef()
  const container = useRef()
  const title = useRef()
  const subtitle = useRef()

  useGSAP(() => {
    gsap.fromTo([title.current, subtitle.current, videoRef.current], {
      opacity: 0,
      scale: 0.6,
      },{ 
      opacity: 1, 
      scale: 1,
      duration:2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: [title.current, subtitle.current],
        toggleActions: 'restart reverse restart reverse',
      },
      onComplete: () => {
        videoRef.current.play()
      },
      }
    );
  })

  return (
    <section className='home-sections flex flex-col justify-between py-24 px-8 md:py-16 md:px-36' id='#Welcome'>

      <div className='flex w-full h-[12%] mb-6 justify-center items-center overflow-hidden'>
        <h1 className='font-semibold text-3xl' ref={title}>Modelo Z 3025</h1>
      </div>

      <div className="flex justify-center w-full md:h-[22rem] h-[10rem] rounded-2xl mb-6">
        <div className='flex w-auto h-full rounded-2xl ' ref={container}>
          <video 
          id='videoHero' 
          ref={videoRef} 
          className="pointer-events-none w-full h-full opacity-0 rounded-2xl neon-shadow" 
          autoPlay 
          muted 
          playsInline={true} 
          key={welcomeVideo}
          onEnded={() => { 
            videoRef.current.currentTime = 0
            videoRef.current.play()
          }}
          >
            <source src={welcomeVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <h4 className='flex w-full h-[15%] justify-center items-center text-sm text-center md:text-start md:text-lg overflow-hidden' ref={subtitle}>
        Envia tu mente a un cuerpo con poder ilimitado...
      </h4>

    </section>
  )
}

export default Welcome