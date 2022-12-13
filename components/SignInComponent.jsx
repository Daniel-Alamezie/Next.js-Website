import React from 'react'
import { FaRegUser } from 'react-icons/fa'


export const SignInComponent = () => {
  
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-center bg-cover'>
      <div>
      <div className='h-[30px] w-[120%]'>
        <h1 className='ml-[42%] mb-[10%] text-white'>Login to Your Account </h1>
      </div>
      <FaRegUser size={105} className='bg-white ml-[42%] mb-[10%] hover:bg-cyan-300' />
        <form>
          <div><input className='hover:bg-cyan-400 m-3 rounded shadown md: h-[30px] w-[120%]' name='email' type='email' placeholder='Email@..com.......'
          /></div>
          <div><input className='hover:bg-cyan-400 m-3 rounded shadown md: h-[30px] w-[120%]' type='password' name='password' placeholder='password'/>
          </div>
          <button><input className='hover:bg-cyan-400 m-3 rounded shadown md: cursor-pointer text-black justify-items-center' type='submit'/></button>
        </form>
      </div>
    </div>
  )
}
export default SignInComponent
