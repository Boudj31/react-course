import React from 'react'
import Link from 'next/link'

const HeaderItem = ({title, href}) => {
  return (
         <li className='cursor-pointer ml-6'>
            <Link href={href}> 
            <a className='text-md hover:text-cyan-700'>{title}</a>
            </Link>
            </li>
  )
}

export default HeaderItem