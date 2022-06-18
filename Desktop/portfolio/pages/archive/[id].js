import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MyLayout from '../../components/MyLayout';

export default function Project({project}) {
  return (
    <MyLayout>
    <main>
    <button className='cursor-pointer mb-6 h-12 flex p-2 items-center bg-black text-white hover:bg-cyan-700  dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400'>
        <Link href="/archive" className='bg-dark text-white w-20 h-10 text-lg'>
        <a>Retour</a>
        </Link>
        </button>
  
        <h1>Titre: {project.attributes.title}</h1>
        <p>Description {project.attributes.description}</p>
        <p>Lien : <a href={project.attributes.urlLink} target='_blank' >Lien du projet</a></p>
        <p>Code Source : {project.attributes.codeSource}</p>
        <p>Temps de réalisation : {project.attributes.duration} jours</p>
        <p>Date de réalisation : {project.attributes.date}</p>
        <p>Service: {project.attributes.service}</p>
        <p>Ajouté le : {project.attributes.publishedAt}</p>
        <p> {project.attributes.languages.data.map((l) => (
          <span key={l.id}>{l.attributes.name}</span>
        ))}</p>



    </main>
    </MyLayout>
  )
}
export async function getStaticProps({params}) {
  const res = await fetch(`http://localhost:1337/api/projects/${params.id}?populate=*`);
  const project = await res.json();

  return {
    props: { 
      project : project.data
     },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*");
  const projects = await res.json();
      const paths = projects.data.map((p) => ({
        params: { id: p.id.toString()},
      }));

    return {
      fallback: true,
      paths,
  
    }
    
  }