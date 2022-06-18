import React from 'react'

const Footer = () => {

    const dateNow = new Date().getFullYear;

  return (
    <footer className='bg-black w-full pt-12 pb-12 text-white text-center'>
        <h3>BOUDJENANE Rachid - &copy; {dateNow }</h3>
    </footer>
  )
}

export default Footer