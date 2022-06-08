import React from 'react'
import { useState } from 'react'
import styles from "./style.module.css"

export default function Form({ handleSubmit, success }) {
   const
      initialState = { firstName: "", lastName: "", email: "", password: "" },
      [formData, setFormData] = useState(initialState)

   // console.log(formData);

   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

   const handleSub = (e) => {
      handleSubmit(e, formData)
      setFormData(initialState)
   }

   return (
      <form onSubmit={handleSub} className={`${styles.form} d-flex`}>

         <h1>register</h1>

         <input onChange={handleChange} value={formData.firstName} required type="text" name="firstName" placeholder='first name...' />
         <input onChange={handleChange} value={formData.lastName} required type="text" name="lastName" placeholder='last name...' />
         <input onChange={handleChange} value={formData.email} required type="email" name="email" placeholder='email...' />
         <input onChange={handleChange} value={formData.password} required type="password" name="password" placeholder='password...' />
         <p className={!success ? "slide-out-right" : 'slide-in-left'}>new user added successfully</p>
         <button type='submit'>Create user</button>
      </form>
   )
}
