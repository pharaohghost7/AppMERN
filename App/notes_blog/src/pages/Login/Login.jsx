import React from 'react'
import './Login.css'
import Logo from 'media/Logo.png'
import {Link} from 'react-router-dom'
import Google from 'media/logo-google.png'

const Login = () => {
    return (
       <>
       <div className="max-w-md w-full space-y-8">

            <h2 className="login">Iniciar Sección</h2>
            <form className="mt-8 space-y-6">
              <input type="hidden" name='Recuerdame' defaultValue='true' />
               <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                      <input name='email'
                      type='email'
                      autoComplete='email'
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" 
                      placeholder="email@email.com" 
                      required />
                  </div>
                  <div>
                      <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                      placeholder='Contraseña'/>
                  </div>
                </div>

        <div className='flex justify-between'>
          <div className="flex items-center">
             <input
             id='remember-me'
             name='remember-me'
             type='checkbox' 
             className="h-4 w-4 text-red-500 focus:ring-red-600 border-red-300 rounded"
              />
              
              <label htmlFor='remember-me' className="ml-2 block text-sm text-red-500"> 
                Recuérdame
              </label>
          </div>

          <div className="text-sm"> 
            <Link to='/' className="font-medium text-red-400 hover:text-red-800">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>

        <div>
          
            <button type='submit'
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

              </span>
              <Link to=''>
                Iniciar Sesion
              </Link>
            </button>
          
        </div>

         <div className='flex items-center justify-between'>
            <span>¿No tienes cuenta?</span>
            <Link to='/register'>
              <span className='font-medium text-red-600 hover:text-red-500'>Regístrate</span>
            </Link>
          </div>
        </form>
      </div>
      <div className='flex items-center justify-center'>
        <span className='mx-4'>------------------------</span>
        <h2 className='my-4 text-center text-sm font-extrabold text-gray-900'>O</h2>
        <span className='mx-4'>------------------------</span>
      </div>
      <div className='max-w-md w-full'>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <div className='flex items-center justify-start'>
              <img src={Google} alt='Logo Google' className='h-6 w-6' />
              <span className='mx-4'>Continúa con Google</span>
            </div>
          </button>
        </div>
      </div>

        </>
    )
}

export default Login
