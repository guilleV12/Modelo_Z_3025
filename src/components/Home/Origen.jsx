import React, { useRef } from 'react'
import { origen1Video, origen2Video, origen3Video } from '../../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HomeVideo from './HomeVideo'
import { ScrollTrigger } from 'gsap/all'
import SectionHeader from './SectionHeader'
import { animateWithGsap } from '../../utils/animations'

gsap.registerPlugin(ScrollTrigger)

const Origen = () => {
  const sectionTitle = useRef()
  const sectionSubtitle = useRef()
  const container = useRef()
  const video1Ref = useRef()
  const video2Ref = useRef()
  const video3Ref = useRef()

  const videos = [origen1Video, origen2Video, origen3Video]

  useGSAP(() => {
    animateWithGsap([sectionTitle.current, sectionSubtitle.current])

    gsap.to([video1Ref.current, video2Ref.current, video3Ref.current], {
      scrollTrigger: {
        trigger: [video1Ref.current, video2Ref.current, video3Ref.current],
        toggleActions: 'restart reverse restart reverse',
        start: "top 20%", // Ajusta el punto de activación
        onEnter: () => {
          video1Ref.current?.play();
          video2Ref.current?.play();
          video3Ref.current?.play();
        },
        onLeave: () => {
          video1Ref.current?.pause();
          video2Ref.current?.pause();
          video3Ref.current?.pause();
        },
      },
    })
  })

  return (
    <section className='home-sections bg-zinc-900 flex flex-col py-6 px-8 md:py-16 md:px-36'>

      <SectionHeader sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} title={'ORIGEN'} colored={true}/>

      {
        videos.map((video, index) => (
          <HomeVideo 
          key={video} 
          container={container} 
          videoRef={index === 1 ? video1Ref : index === 2 ? video2Ref : video3Ref} 
          videoSrc={video} 
          />
        ))
      }

    </section>
  )
}

export default Origen