import React, { useEffect, useState } from 'react'
import PropagateLoader  from "react-spinners/ClipLoader";

const Footer = () => {
  const [footerData, setFooterData] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("/src/constants/data.json");
        if (!response.ok) throw new Error("Error al cargar JSON");

        const data = await response.json();
        //console.log(data.footer); // Verificar la data
        setFooterData(data.footer);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    }

    fetchData()
  }, [])

  return (
    <footer className='flex w-full flex-col min-h-20 px-2 md:px-36'> 
      {error ? error : (
        <>
        <p className='flex flex-col md:flex-row w-full justify-start items-center font-semibold text-center md:text-start text-white text-xs py-1 md:py-3 mb-1 md:mb-0 border-white border-b-1'>
          Landing page demo, empleando: React Js, TailwindCSS, Three.js y Gsap. No monetizable.{' '}
          <a className='underline cursor-pointer text-[16px] font-bold ml-1 my-1 md:my-0' href={footerData ? footerData[1]["href"] : ''}>Mas trabajos +</a>
        </p>

        <div className='flex flex-col md:flex-row w-full justify-between md:py-3 mt-1 md:mt-0'>
          <p className='font-semibold text-white text-xs text-center md:text-start mb-1 md:mb-0'>
            Copyright @ 2025 Guillermo Vera. All rights reserved.
          </p>

          <div className='flex justify-center md:block mb-1 md:mb-0'>
            { footerData ? (
                footerData.map((link, i) => (
                  <a className=' font-semibold text-white text-xs cursor-pointer' href={link.href} key={link.title}>
                    {link.title}{' '}
                    {i !== footerData.length - 1 && (
                      <span className='mx-1 md:mx-2'> | </span>
                    )}
                  </a>
                ))
              ) : (
                <div className=''>
                  <PropagateLoader 
                    color={'#ffffff'}
                    loading={true}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              )
            }
          </div>
        </div>
        </>
      )}
    </footer>
  )
}

export default Footer