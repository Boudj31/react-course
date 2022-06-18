import React from 'react'
import Link from 'next/link'

const ContactItem = ({ href, title, color }) => {
    return (
        <button className='cursor-pointer ml-6 h-12 flex p-2 items-center bg-black text-white hover:bg-cyan-700  dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400'>
            <li className=''>
                <Link href={href}>
                    <a className='letter'>{title}</a>
                </Link>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="17" y1="7" x2="7" y2="17" />
                <polyline points="8 7 17 7 17 16" />
            </svg>
        </button>
    )
}

export default ContactItem