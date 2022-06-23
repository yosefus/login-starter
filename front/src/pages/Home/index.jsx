import React from 'react'
import styles from "./style.module.css"
import Form from '../../components/Form'
import UsersTable from '../../components/UsersTable'
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

   }

   const register = async (e, newUser) => {
      e.preventDefault()

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
