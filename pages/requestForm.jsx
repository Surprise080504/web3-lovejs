import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql, useQuery } from '@apollo/client'


const NEW_ACCOUNT = gql`
  mutation nuevoUsuario($input: UsuarioInput) {
    nuevoUsuario(input: $input) {
      discord
      opensea
    }
  }
`;

const requestForm = () => {
  const [ nuevoUsuario ] = useMutation(NEW_ACCOUNT);
  //Validacion de formulario y cuenta
  const formik = useFormik({
    initialValues: {
      opensea:'',
      discord:''
    },
    validationSchema: Yup.object({
      opensea: Yup.string().required('Opensea URL is required'),
      discord: Yup.string().required('DiscordTag is required'),
    }),
    onSubmit: async values => {
      const { discord, opensea } = values
      try{
        console.log({data})
        const { data } = await nuevoUsuario({
          variables: {
            input: {
              opensea,
              discord,
            }
          }
        });
        console.log(data)
      }catch(error){
        console.log(' error ',error);
      }
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
              <div className="form-error_container"> 
              <p className="form-error">{formik.errors.opensea}</p> 
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
              <div className="form-error_container"> 
              <p className="form-error">{formik.errors.discord}</p> 
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
