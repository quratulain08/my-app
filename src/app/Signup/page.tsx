// pages/signup.tsx

import React from 'react';
import Link from 'next/link';

const Signup: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#112d60] to-[#b6c0c5]'>
      <div className='w-full max-w-md p-8 bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold text-[#112d60] mb-6 text-center'>Sign Up</h1>
        <form>
            
          <div className='mb-4'>
            <label htmlFor='username' className='block text-gray-700'>Username</label>
            <input
              type='text'
              id='username'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input
              type='password'
              id='password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#112d60] focus:border-[#112d60] sm:text-sm'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-[#112d60] text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#112d60]'
          >
            Sign Up
          </button>
        </form>
        <div className='mt-4 text-center'>
          <p>Already have an account?{' '}
            <Link href="/Login" className='text-blue-600 hover:text-blue-800'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
