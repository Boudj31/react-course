import React from 'react'
import HeaderItem from './HeaderItem'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import ContactItem from './ContactItem'
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Menu = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    console.log(router.asPath);

    useEffect(() => {
        setMounted(true);
      }, []);

    return (
        <header className=' md:container mx-auto flex flex-col mt-5 pb-4 sm:flex-row justify-between items-center h-auto border-b border-black dark:border-white'>
            <span className='bg-black text-white ml-3 p-2 rounded dark:bg-white dark:text-slate-900'>RB</span>

            <nav className=' flex items-center mt-2'>
                <HeaderItem title="Accueil" href='/' />
                <HeaderItem title="Archives" href='/archive' />
                <HeaderItem title="Qui suis je ?" href='/apropos' />
                <ContactItem title="Contactez-moi" href="/contact" color={theme === "dark" ? "#000" : "#FFF"} />
                {mounted && (
                <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 hover:animate-pulse"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
              {theme == "dark" ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
            }
              
            
          </button>
          )}
                
            </nav>
        </header>
    )
}

export default Menu