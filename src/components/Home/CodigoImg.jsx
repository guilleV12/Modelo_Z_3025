import React from 'react'

const CodigoImg = ({ img }) => {
  return (
    <div className="md:px-20">
      <div className="img-carousel_container">
        <div className="w-[90%] md:w-[100%] h-full flex-center rounded-3xl overflow-hidden bg-zinc-900">
          <img src={img} alt="samurai pic" className='w-full h-full object-center object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default CodigoImg