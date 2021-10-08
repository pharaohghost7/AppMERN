import React from 'react'
import Logo from 'media/Logo.png'

const Imagen = (w) => {
    return (
        <div className="flex">
            <img className='mx-auto h-40 w-auto'  src={Logo} alt="img" />
        </div>
    )
}

export default Imagen
