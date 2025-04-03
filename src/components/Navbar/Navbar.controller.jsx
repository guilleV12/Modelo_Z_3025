import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PropagateLoader  from "react-spinners/ClipLoader";

const NavbarController = () => {
  const [navBarData, setNavBarData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/constants/data.json");
        if (!response.ok) throw new Error("Error al cargar JSON");

        const data = await response.json();
        //console.log(data.navbar); // Verificar la data
        setNavBarData(data.navbar);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      {error && error}
      {
        navBarData ? (
          <Navbar links={navBarData}/>
        ) : (
          <div className='flex w-full justify-center py-2'>
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
    </>
  )
}

export default NavbarController