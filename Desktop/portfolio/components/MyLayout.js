
import React from 'react'
import Footer from './Footer'
import Menu from './Header/Menu'
import Head from 'next/head'

const MyLayout = ({children, metatitle, metaDescription}) => {

  return (
    <div className='bg-white dark:bg-slate-900'>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className=" splice">
        <Menu />
        <div className='md:container mx-auto'>
        {children}
        </div>
        <Footer />
    </main>

    </div>
   

  )
}

export default MyLayout