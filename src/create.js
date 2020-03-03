import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import { MDBCol } from "mdbreact";

export default class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      publisher: '',
      result: ""
    };
  }
  create = () => {
    const { name, author, publisher } = this.state;
    const BASE_URL = "https://5e5bfeca2faeae0014f92e60.mockapi.io/books";
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        author: author,
        publisher: publisher
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res) {
          this.setState({
            name: "",
            author: "",
            publisher: "",
            result: "Created successfully!"
          })
        }
      })
  }
  handleChange = (event) => {
    this.setState({
      result: "",
      name: event.target.value
    })
  }
  handleChange2 = (event) => {
    this.setState({
      result: "",
      author: event.target.value
    })
  }
  handleChange3 = (event) => {
    this.setState({
      result: "",
      publisher: event.target.value
    })
  }

  render = () => {
    return (
      <MDBCol md="6" onKeyPress={this.handleKeyPress}>
        <div className="active-pink-3 active-pink-4 mb-4">
          <input className="form-control" placeholder="Book name" type="text" aria-label="name" value={this.state.name} onChange={this.handleChange} />
          <input className="form-control" placeholder="Author" type="text" aria-label="author" value={this.state.author} onChange={this.handleChange2} />
          <input className="form-control" placeholder="Publisher" type="text" aria-label="publisher" value={this.state.publisher} onChange={this.handleChange3} />
          <Button onClick={this.create} variant="info">Create</Button>
          <Button href="/" variant="danger">List and Search</Button>
        </div>
        <p>{this.state.result}</p>
      </MDBCol>
    );
  };
}