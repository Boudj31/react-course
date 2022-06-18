import { ErrorMessage } from '@hookform/error-message';
import React from 'react'
import { useState } from "react";
import { useForm } from 'react-hook-form';
import MyLayout from '../components/MyLayout';
import emailjs from 'emailjs-com';



const contact = () => {
        const [loading, setLoading] = useState(true);
        const { register, handleSubmit, formState: { errors } } = useForm();

        const sendEmail = (formData) => {
            console.log(process.env.EMAIL_JS_USER)
            emailjs
              .send('service_v3wwt1l', 'template_3hhvq6e', formData, 'user_MyqvTy6Z4MKfWQRQQJ5gr')
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                }
              );
          };
  return (
      <MyLayout>
          <main>
              <div>
              <h1 className='title'>Contactez-moi !</h1>
              <p>Vous appreciez mon travail et souhaiteriez un devis pour une service ou bien tout simplement echanger avec moi </p>
              </div>
            
              <form className="w-full max-w-lg mt-7" onSubmit={handleSubmit(sendEmail)}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-first-name">
        Prenom
      </label>
      <input
      {...register("firstName", { required: "Ce champs est requis !", maxLength:{value: 25, message: "ce champs ne peut pas depasser 25 caractères"  } })}
       className="appearance-none block w-full bg-gray-200 dark:bg-slate-800 dark:text-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
       {errors.firstName && <p className='text-red-500 text-xs italic'>{errors.firstName.message}</p>}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-last-name">
        Nom
      </label>
      <input
      {...register("lastName")}
       className="appearance-none block w-full bg-gray-200 dark:bg-slate-800 dark:text-white  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-password">
        email
      </label>
      <input
      {...register("email", {required: "Ce champs est requis !"})} 
       className={'appearance-none block w-full bg-gray-200 dark:bg-slate-800 dark:text-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'}
        id="grid-password" type="email" placeholder="exemple@emple.fr"/>
      {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-state">
        Sujet
      </label>
      <div className="relative">
        <select 
        {...register("subject")}
        className="block appearance-none w-full bg-gray-200 dark:bg-slate-800 dark:text-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Demande de devis</option>
          <option>Offre d'emploi</option>
          <option>Discuter</option>
          <option>Autres demandes</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-password">
        Message
      </label>
      <textarea 
      {...register("message", { required: "Ce champs est requis !", maxLength:{value: 500, message: "ce champs ne peut pas depasser 500 caractères"  }})}
      className=" h-40 appearance-none block w-full bg-gray-200 dark:bg-slate-800 dark:text-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                 id="grid-message" type="text" placeholder="Fais de ton rêve une réalité et fais de ta vie une source d'inspiration pour les autres.">
      </textarea>
      {errors.message && <p className='text-red-500 text-xs italic'>{errors.message.message}</p>}
    </div>
  </div>

  <button 
  type='submit'
  className='cursor-pointer h-12 flex p-2 items-center bg-black text-white hover:bg-cyan-700  dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400'>
      Envoyé !
  </button>

  
</form>
       
        </main> 
      </MyLayout>
   
 
  )
}

export default contact