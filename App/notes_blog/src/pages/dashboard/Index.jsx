import React from 'react'
import NotesGet from 'services/NotesGet'
import UserGets from 'services/UserGets'

const Index = () => {
    return (
        <div>
           Yo soy el index del Dashboard 
           <NotesGet />

           <br/>
           <br/>
          

        </div>
    )
}

export default Index
