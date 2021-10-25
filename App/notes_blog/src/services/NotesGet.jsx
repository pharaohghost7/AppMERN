
import axios from 'axios'
import React, { Component } from 'react'

export class NotesGet extends Component {
    state = {
        notes:[],
        status: false
    }
    componentDidMount(){

        axios.get(`http://localhost:4000/api/`)
            .then(res =>{
                this.setState({
                    notes: res.data,
                    status: true
                })
            })

    }

    render() {
        return (

            <div className="py-8">
            <table class="table-auto">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>nota</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.notes.map((notes, i)=>{
                        return(
                            <tr key={i}>
                                <td>{notes.name}</td>
                                <td>{notes.email}</td>
                                <td>{notes.note}</td>
                            </tr>
                        )
                        
                    })}

                </tbody>
            </table>
            </div>
        )
    }
}

export default NotesGet

