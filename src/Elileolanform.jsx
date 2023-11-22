import React, { useState } from 'react'


function Elileolanform() {
    
    const [form, setForm] = useState({username: "",age:""})
    const [formErrror, setFormErrror] = useState({})
    const handlesubmit=(e)=>{
        e.preventDefault()
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({...form,[name]:value})
        console.log(name,value);
    }
  return (
    <>
    <div>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">istifadecinin adi</label>
            <br />
            <input name='username' value={form.username} onChange={handleChange} type="text" />
            <hr />
            <label htmlFor="">istifadecinin  yasi</label>
            <br />
            <input  name='age'  value={form.age} onChange={handleChange} type="text" />
            <hr />
            <button type='submit'>sing in</button>
        </form>
    </div>
    </>
  )
}

export default Elileolanform