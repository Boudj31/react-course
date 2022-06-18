import React from 'react'

const GithubCard = ({repo, color}) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 shadow-md   p-4 sm:mb-4 ">
        <div className='flex justify-between'>
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {repo.name}
        </h1>
        <span className='border-black border-2 dark:border-white px-2'>{repo.visibility}</span>

        </div>
      <p className="text-base font-normal my-4 text-gray-500 dark:text-slate-300">
        {repo.description ? repo.description : <span>Pas de description</span>} 
      </p>
      <p className='text-cyan-600'>{repo.language ? repo.language : <span>non reconnnu</span> }</p>
      <a
        href={repo.html_url}
        target='_blank'
        className="font-semibold"
      >
        <p className='cursor-pointer flex p-2 items-center bg-black text-white hover:bg-cyan-700  dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400 w-36 mt-2'>
            Voir le dépot 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="17" y1="7" x2="7" y2="17" />
                <polyline points="8 7 17 7 17 16" />
            </svg>
            </p>
      </a>
    </div>
  )
}

export default GithubCard