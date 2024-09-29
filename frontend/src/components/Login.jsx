import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
  const Navigate = useNavigate()

  const Login = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/login',{
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',// cookie will be excepted
    })
    if(response.status === 200) {
      alert("Login successful")
      Navigate('/')
    }
    else {
      alert("Login failed")
    }
  }

  return (
    <div className='h-[80vh] w-full flex items-center justify-center'>
      <form action="" method="post" className='border-2 flex flex-col items-center w-fit p-10 rounded-xl gap-2 border-black'>
        <div className='flex flex-col items-center pb-5'>
          <h1 className='text-3xl font-semibold pb-5 leading-3'>Welcome Back</h1>
          <p className='text-gray-600'>Please enter your details to login</p>
        </div>
        <input type="text" placeholder='Email' className='w-[20rem] px-5 py-2 rounded-lg bg-transparent border-[1px] border-black' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' className='w-[20rem] px-5 py-2 rounded-lg bg-transparent border-[1px] border-black' onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" className='bg-blue-500 text-white w-full py-5 font-semibold border-none rounded-lg' onClick={Login} />
        <h1 className='text-sm italic'>Don't have an account? <Link to={'/register'} className='text-red-500 font-semibold'>Register</Link></h1>
      </form>
    </div>
  )
}

export default Login