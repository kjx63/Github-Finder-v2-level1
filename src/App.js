import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await github.get('/users');

    this.setState({
      users: res.data,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
