import React from 'react'
import styles from "./style.module.css"

export default function UsersTable({ users = [] }) {
   return (
      <table className={`${styles.main} scale-in-top`}>

         <thead>
            <tr>

               <th>first name</th>
               <th>last name</th>
               <th>email</th>
            </tr>
         </thead>
         <tbody>

            {users.map((user, i) => <tr key={`${i}t`}>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
            </tr>)}
         </tbody>

      </table>
   )
}
