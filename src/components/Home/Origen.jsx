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

    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];

    videos.forEach((video) => {
      if (video) {
        gsap.fromTo(video, {
            opacity: 0,
          },{
            opacity: 1, 
            duration:2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: video,
              toggleActions: 'restart reverse restart reverse',
              start: "top 50%",
              onEnter: () => video.play(),
              onLeave: () => video.pause(),
              onEnterBack: () => video.play(),
              onLeaveBack: () => video.pause(),
            },
            onComplete: () => {
              video.play()
            },
          }
        )
      }
    });

  })

  return (
    <section className='home-sections bg-zinc-900 flex flex-col py-6 px-8 md:py-16 md:px-36' id='Origen'>

      <SectionHeader sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} title={'ORIGEN'} colored={true}
        subtitleContent={'Originado por la necesidad de acelerar la evolucion humana.'}
      />

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