import { useState } from "react"
import Authlayout from "../../../layouts/authlayout"
import {FieldBotton, FieldInput} from '../../../components'
const index = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const signIn = () => {
    alert(`${username} , ${password}`)
  }
  return (
    <Authlayout>
      <div className="w-96 mt-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="text-center">
            <h2>System Login </h2>
          <h4>Portofolio</h4>
          </div>
          <FieldInput label="Username" placeholder="username" type="text" key={'username'} value={username} onChange={(e: any) => setUsername(e.target.value)}/>
          <FieldInput label="Password" placeholder="********" type="password" key={'password'} value={password} onChange={(e: any) => setPassword(e.target.value)}/>
          <div className="flex items-center justify-between">
            <FieldBotton variant="primary" >
              sign In
            </FieldBotton>
          </div>
        </div>
      </div>
    </Authlayout>
  )
}

export default index
