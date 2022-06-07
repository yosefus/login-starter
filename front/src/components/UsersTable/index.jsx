import React from 'react'
import styles from "./style.module.css"

export default function UsersTable({ users = [] }) {
   return (
      <table className={`${styles.main}`}>

         <thead>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
         </thead>

         {users.map((user, i) => <tr key={`${i}t`}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
         </tr>)}

      </table>
   )
}
