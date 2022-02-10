import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const requestForm = () => {

  //Validacion del formulario

  const formik = useFormik({
    initialValues: {
      opensea:'',
      discord:''
    },
    validationSchema: Yup.object({
      opensea: Yup.string().required('Opensea URL is required'),
      discord: Yup.string().required('DiscordTag is required'),
    }),
    onSubmit: values => {
      console.log('enviando');
      console.log(values);
    }
  });

  return (
    <main className="main">

      <article className="article">

      <div className="article-subcontainer">
        <div className="header">
          <h1>Request Form</h1>
        </div>
        <form className="form" action="" onSubmit={formik.handleSubmit}>
          {/* <input className="input input-name" placeholder="Name" id="name" type="text" /> */}
          <label className="label">Opensea profile URL</label>
          <input 
            id="opensea"
            placeholder="https://opensea.io/Geralt"
            className="input input-opensea_id"
            type="text" 
            value={formik.values.opensea}
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />

              {
              formik.touched.opensea && formik.errors.opensea ? 
              <div className="FFFFFFFFFFF"> 
              <p className="AAAAAAAAAAAAAAAA">{formik.errors.opensea}</p> 
              </div>
              : 
              null
              }
    
          <label className="label" htmlFor="">Discord Name</label>
          <input 
            id="discord"
            className="input input-discordName" 
            placeholder="Geralt#3389" 
            type="text" 
            value={formik.values.discord} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {
              formik.touched.discord && formik.errors.discord ? 
              <div className="FFFFFFFFFFFFFF"> 
              <p className="AAAAA">{formik.errors.discord}</p> 
              </div>
              : 
              null
              }
          
          <button className="input input-submit" type="submit">Send</button>
        </form>
      </div>
      </article>
    </main>    
  )
};

export default requestForm;
