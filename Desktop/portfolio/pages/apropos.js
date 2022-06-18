import React from 'react'
import MyLayout from '../components/MyLayout';
import SkillsCard from '../components/SkillsCard';

 const  APropos = ({skills}) => {
  return (
    <MyLayout>
        <div className='flex justify-between'>
        <SkillsCard skills={skills} title="Front End" type="FrontEnd" />
        <SkillsCard skills={skills} title="Back End" type="BackEnd" />
        <SkillsCard skills={skills} title="Soft Skills" type="Softskills" />
        </div>
  </MyLayout>
  )
}

export default APropos;

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/skills?populate=*");
  const skills = await res.json();

  return {
    props: { 
      skills : skills.data,
      revalidate : 10
     },
  };
}