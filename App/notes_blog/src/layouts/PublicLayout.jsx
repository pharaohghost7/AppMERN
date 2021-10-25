import React from 'react'

const PublicLayout = ({children}) => {
    return (
        <div className="publicLayout text-center">
            <h1 className="text-5xl">Soy el publicLayout</h1>
              {children}  
        </div>
    )
}

export default PublicLayout
