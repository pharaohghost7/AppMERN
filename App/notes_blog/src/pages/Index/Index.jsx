import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SetModal from 'components/Modal/SetModal'

const Index = () => {
const [boton, setBoton] = useState(false)
const {isAuthenticated} = useAuth0()
const [Texto, setTexto] = useState('estado 1')
useEffect(()=>{
  if(!boton){
    setTexto('estado 1')
  }else{
    setTexto('Estado 2')
  }
},[boton])

    return (
        <>  
          {
            isAuthenticated ? (
              <div>
           
           <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
            
          >
            <div className='flex items-center justify-start'>
              
              <span className='  mx-4'>Cerrar Sesión</span>
            </div>
          </button>
            
        </div>
            ):(
              
        <div>
        <Link to= "/login">
        <button
         type='submit'
         className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
         
       >
         <div className='flex items-center justify-start'>
           
           <span className='  mx-4'>Login</span>
         </div>
       </button>
          </Link>
     </div>
            )

          }
          <div className="py-1 mt-4 mx-2 w-100 bg-red-400 text-gray-800 hover:bg-red-700 font-bold">
            <button
              onClick={()=>{setBoton(!boton)}}
            >{Texto}</button>
          </div>
          <br/>
          <br/>
          <SetModal Nombre="Modal" />

        </>
    )
}

export default Index
