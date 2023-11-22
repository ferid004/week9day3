import React from 'react';
import { ErrorMessage, Field, Form, Formik} from 'formik';
import {object ,string} from 'yup'; 

import './App.css';
const SignUpSchema=object().shape({
  firstname:string().min(3,"insan adi en azindan 3 herf olmalidi").max(25,"24 den cox yazmaq olmaz").required("bosh buraxmaq olmaz !!!"),
  lastname:string().min(3,"insan soyadadi en azindan 3 herf olmalidi").max(25,"24 den cox yazmaq olmaz").required("bosh buraxmaq olmaz !!!"),
  email:string().email("email bele olmur duzgun yaz").required("bosh buraxmaq olmaz !!!"),
  password:string().min(8,"guvenlik tetbirlerine gore minumu 8 simvol olmalidi").max(25,"24 den cox yazmaq olmaz").required("bosh buraxmaq olmaz !!!"),
}) 
const App=()=> {
return(
  <Formik
    initialValues={{firstname:"",lastname:"",email:"",password:""}}
    validationSchema={SignUpSchema}
    onSubmit={ (values)=>{localStorage.setItem('Data', JSON.stringify(values))}}
    >
{({ isValid }) => (
      <Form>
        <label htmlFor="">istifadeci adi</label><br />
        <Field type="text" name="firstname" /><br />
        <ErrorMessage name="firstname" /><hr />
        
        <label htmlFor="">istifadeci soyadi</label><br />
        <Field type="text" name="lastname" /><br />
        <ErrorMessage name="lastname" /><hr />

        <label htmlFor="">istifadeci email adressi</label><br />
        <Field type="text" name="email"  /><br />
        <ErrorMessage name="email" /><hr />

        <label htmlFor="">istifadeci password </label><br />
        <Field type="text" name="password"  /><br />
        <ErrorMessage name="password" /><hr />

        <button disabled={!isValid} type='submit'> gonder getsin</button><br />
      </Form>
)}
  </Formik>
)
}

export default App;
