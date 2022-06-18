import React from 'react'
import Link from 'next/link';
import MyLayout from '../../components/MyLayout';
import  RingLoader  from 'react-spinners/RingLoader';
import {useState, useEffect} from 'react'
import { useTheme } from 'next-themes';

 function  Archive({projects}) {
  const {theme} = useTheme()
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if(projects.length > 0) {
      setTimeout(() => {
        setLoading(false)
        console.log("chargement finis")
      }, 1000)
    } else {
      setLoading(true)
    }
  }, [])
  
  return (
    <MyLayout>
      { loading ? <div className='flex justify-center py-20'>
        <RingLoader color={theme == 'dark' ? '#FFF' : '#000' } loading={loading} size={150} /> 

                 </div> : 
      <div>
      <h2 className='text-2xl mb-3'>Tous mes projets :</h2>
      {projects.map((p) => (
        <Link href={`/archive/${p.id}`} key={p.id}>
          <a>
          <h2 className='text-xl'>{p.attributes.title}</h2>
          </a>
        </Link>
      ))}
   
  </div> }
    
  </MyLayout>
  )
}

export default Archive;

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*")
  const projects = await res.json();
  
  return {
    props: { 
      projects : projects.data,
      revalidate : 10
     },
  };
}