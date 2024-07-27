'use client'
import { UserContext } from '@/context/UserCtxProvider'
import React, { useContext, useState, use } from 'react'

function UseHookExample1() {
  const userData = useContext(UserContext) 
  const [showUser, setShowUser] = useState(false)

  return (
    <>
      {showUser &&
        <div>
          <h1>Name - {userData.name}</h1>
          <h2>Age - {userData.age}</h2>
          <h2>Status - {userData.status}</h2>

        </div>
      }
      <button onClick={() => setShowUser(true)}>Show User</button>
    </>
  )
}



export default UseHookExample1