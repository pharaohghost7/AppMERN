import React, {Component} from "react";
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons' 
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const uri = 'http://localhost:4000/api/'; 
class App extends Component {

  state={
    notes:[],

  }

  peticonget=()=>{
    axios.get(uri).then(response=>{
      this.setState({ notes: response.data});
      console.log(this.state.notes)
    })
  }
  render(){
    this.peticonget()
    
  return (
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    {this.state.notes.map((notes,i)=>{
      return(
        <tr key={i}>
          <td>{i}</td>
          <td>{notes.name}</td>
          <td>{notes.email}</td>
          <td>{notes.note}</td>
          <td>
            <button><FontAwesomeIcon icon={faEdit} /></button>
            <button><FontAwesomeIcon icon={faTrashAlt} /></button>
          </td>
        </tr>
      )
    })}
  </tbody>
</Table>

    </>
  );
}
}

export default App;
