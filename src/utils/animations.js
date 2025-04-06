import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target) => {
  gsap.fromTo(target, {
    opacity: 0,
    translateY: 30,
  },{ 
    opacity: 1, 
    translateY: 0,
    duration: 2,
    stagger: 0.5,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
    },
  },
  )
}