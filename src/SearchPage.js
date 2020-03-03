import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import SearchInfo from './SearchInfo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'author', 'publisher']
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: [],
      name: "",
      author: "",
      publisher: ""
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(event) {
    if (event.key === 'Enter')
      this.search();
  }
  search() {
    const BASE_URL = "https://5e5bfeca2faeae0014f92e60.mockapi.io/books";
    fetch(BASE_URL, { method: "GET" })
      .then(response => response.json())
      .then(res => {
        this.setState({
          items: res
        })
      })
  }
  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }
  searchUpdated = (term) => {
    this.setState({ searchTerm: term })
  }
  render() {
    const { items } = this.state;
    console.log(this.state.items[0]);
    const filteredBooks = items.filter(createFilter(this.state.query, KEYS_TO_FILTERS))
    return (
      <div >
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Book name, author or publisher" onChange={this.handleChange}
              onKeyPress={this.handleKeyPress} />
          </InputGroup>
        </FormGroup>
        <ButtonToolbar>
          <Button onClick={this.search} variant="danger">Search</Button>
          <Button href="/create" variant="info">Create</Button>
        </ButtonToolbar>
        <SearchInfo items={filteredBooks} />
      </div>
    );
  }
}
