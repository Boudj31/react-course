import axios from 'axios';
import { useTheme } from 'next-themes';
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard';
import MyLayout from '../components/MyLayout';
import getRepoGithub from '../utils/getRepoGithub';


export default function Home({repositories}) {
  const { theme } = useTheme();
  //const [repos, setRepos] = useState([]);
/*
  useEffect(async () => {
    setRepos(repositories);
  }, []);
  */
  return (
    <MyLayout>
      <section id='section1' className='grid gap-4 grid-cols-2 grid-rows-2 mb-3"'>
        <div className='mr-3'>
        <h1 className="title mb-4">Développeur 
      <span className='bg-black text-white ml-3 p-2 dark:bg-white dark:text-slate-900 letter'> FullStack</span>
      </h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel quaerat maiores impedit consequatur fuga quod necessitatibus animi reprehenderit a vitae ratione dolorum, optio aperiam totam aut aspernatur minima harum.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus minima alias modi voluptatem libero? Est quisquam sapiente molestiae, dolorem ducimus perferendis reprehenderit odio aliquam ipsa harum sunt expedita? Deserunt?</p>
      <div className='flex justify-start items-center mt-4'>
        <button className='bg-black p-4 rounded-full dark:bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke={theme === "dark" ? "#000" : "#FFF"} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="18" y1="13" x2="12" y2="19" />
  <line x1="6" y1="13" x2="12" y2="19" />
</svg>
        </button>
        <p className='letter ml-3'>Scroll</p>

      </div>
        </div>
        <div>
          
        </div>
      </section>

      <section>
      <div>
        <div className='lg:flex justify-between mb-7 md:block sm:block xs:block '>
          <h2 className='sub-title letter'>Mes dernières réalisations sur Github</h2>
          <a
          target='_blank'
            href={`https://github.com/Boudj31`}
            className=" letter shadow-sm  cursor-pointer h-12 flex p-2 items-center bg-black text-white hover:bg-cyan-700  dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400"
          >
            <p>Allez sur mon Github</p>
          </a>

        </div>
    
          <div className='grid gap-4 lg:grid-cols-3  md:grid-cols-2 grid-rows-3 sm:grid-cols-1 mb-3'>
          {repositories &&
             repositories.map((repo, idx) => (
             <GithubCard repo={repo} key={idx} color={theme === "dark" ? "#000" : "#FFF"}/>
          ))}
          </div>  
          
      </div>
      </section>

      
    </MyLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:Boudj31+sort:author-date-desc`);
  const repositories = await res.json();
  const latest = repositories.items.splice(24, 30);

  return {
    props: { 
      repositories : latest,
      revalidate : 10
     },
  };
};
/*
export async function getStaticProps() {
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8")
  const posts = result.data
  return {
    props : {
      posts
    }
  }
  }catch (error) {
    console.log(error);
}
  
}*/
