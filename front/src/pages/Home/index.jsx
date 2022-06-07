import React from 'react'
import styles from "./style.module.css"
import Form from '../../components/Form'
import UsersTable from '../../components/UsersTable'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

const getUsersUrl = "http://localhost:4200/api/users"
const registerUrl = "http://localhost:4200/api/register"

export default function Home() {
   const
      [users, setUsers] = useState([]),
      [success, setSuccess] = useState()

   // console.log("all users",users);

   const getUsers = () => {
      axios.get(getUsersUrl)
         .then(({ data }) => setUsers(data))
         .catch(error => console.log("error \n", error.message || error))
   }

   const register = async (e, newUser) => {
      e.preventDefault()

      axios.post(registerUrl, newUser)
         .then(({ data }) => {
            console.log(data)
            getUsers()
            setSuccess(true)
            setTimeout(() => setSuccess(), 4000)
         })
         .catch(error => console.log("error \n", error.message || error))
   }

   useEffect(getUsers, [])

   return (
      <div className={`${styles.main} d-flex`}>
         <div className={`${styles.container} d-flex`}>
            <Form handleSubmit={register} success={success} />
            <UsersTable users={users} />
         </div>
      </div>
   )
}
