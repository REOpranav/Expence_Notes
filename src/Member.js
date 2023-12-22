import React from 'react'

const Member = ({user}) => {
  return (
    <div>
         <ul>
      {/* using map function */}
        {user.map((user) => {
          return (
            <li key={user.adminId}>
               <h1>{user.adminName}</h1>         
            </li>
          );
        })}
      </ul>

    </div>
  )
}

export default Member