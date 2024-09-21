import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => { 
    e.preventDefault()
    
    axios.post('http://localhost:3000/register', {
      email,
      password
    }).then((res) => {
      console.log(res)
    }).then((err) => {
      console.log(err)
    })
  }

  return (
    <div className='h-[80vh] w-full flex items-center justify-center'>
      <form onSubmit={handleRegister} className='border-2 flex flex-col items-center w-fit p-10 rounded-xl gap-2 border-black'>
        <div className='flex flex-col items-center pb-5'>
          <h1 className='text-3xl font-semibold pb-5 leading-3'>New to Express</h1>
          <p className='text-gray-600'>Please enter your details to Register</p>
        </div>
        <input
          type="email"
          placeholder='Email'
          className='w-[20rem] px-5 py-2 rounded-lg bg-transparent border-[1px] border-black'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          className='w-[20rem] px-5 py-2 rounded-lg bg-transparent border-[1px] border-black'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Register"
          className='bg-yellow-400 text-black w-full py-5 font-semibold border-none rounded-lg'
        />
        <h1 className='text-sm italic'>
          Already have an account?{' '}
          <Link to={'/login'} className='text-red-500 font-semibold'>
            Login
          </Link>
        </h1>
      </form>
    </div>
  )
}

export default Register
