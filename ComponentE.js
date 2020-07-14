import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, desgContext } from '../App'

function ComponentE() {

  const user = useContext(UserContext)
  const desg = useContext(desgContext)
  return <div> User is {user} and designation is {desg}</div>
}

export default ComponentE