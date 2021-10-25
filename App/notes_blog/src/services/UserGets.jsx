import axios from 'axios'
import React, { Component } from 'react'




export  class UserGets extends Component {

    state = {
        user:[],
        status: false
    }

    componentDidMount(){
        axios.get(`http://localhost:4000/users/`)
         .then (res=>{
             this.setState({

                 user: res.data,
                 status: true
                }
               
             )
         },
         console.log(this.state.user))        }
    render() {
        return (
            <div className="py-8">
            <table class="table-auto">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>edad</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.user.map((user, i)=>{
                        return(
                            <tr key={i}>
                                <th className="px-3">{i}</th>
                                <td className="px-3">{user.nombres}</td>
                                <td className="px-3">{user.email}</td>
                                <td className="px-3">{user.edad}</td>
                                <td><button
                                className="group relative w-15 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-200 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    editar
                                    </button>
                                    </td>
                                    <td><button
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-200 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >Eliminar</button></td>
                            </tr>
                        )
                        
                    })}

                </tbody>
            </table>
            </div>
        )
    }
}

export default UserGets