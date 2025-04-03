import React from 'react'

const HomeVideo = ({ container, videoRef, videoSrc }) => {

  return (
    <div className="flex justify-center w-full h-[10rem] md:h-[22rem] rounded-2xl mb-6 overflow-hidden">
      <div className='flex w-fit h-full rounded-2xl' ref={container}>
        <video  
        ref={videoRef} 
        className="pointer-events-none w-full h-full rounded-2xl" 
        autoPlay 
        muted 
        playsInline={true} 
        key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default HomeVideo