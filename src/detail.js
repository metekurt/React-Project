import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './App.css';

export default class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }
  componentDidMount() {
    const detailId = this.props.match.params.id
    const BASE_URL = "https://5e5bfeca2faeae0014f92e60.mockapi.io/books/";
    fetch(BASE_URL + detailId, { method: "GET" })
      .then(response => response.json())
      .then(res => {
        console.log("res", res);
        this.setState({
          item: res
        })
      })
  }

  render = () => {
    const { item } = this.state
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              Book name: {item.name}
            </p>
            <p>
              Author: {item.author}
            </p>
            <p>
              Publisher: {item.publisher}
            </p>
            <ButtonToolbar>
              <Button href="/" variant="danger">List and Search</Button>
              <Button href="/create" variant="warning">Create</Button>
            </ButtonToolbar>
          </header>
        </div>
      </Router>
    );
  };
}