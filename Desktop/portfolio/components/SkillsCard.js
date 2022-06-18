import React from 'react'
const SkillsCard = ({skills, title, type}) => {
  return (
    <>
     <div className='mt-3'>
     <h2 className='text-lg'>{title}</h2>
     <ul>
     {skills.map((s) => (
      s.attributes.type === type && 
      <li className='text-slate-600' key={s.id}>{s.attributes.name}</li>
      ))}
     </ul>
  </div>    
    </>
  )
}

export default SkillsCard