import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

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

  // Search Github Users
  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });
    const res = await github.get(`/search/users?q=${text}`);
    console.log(res.data);
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  // Cleaer users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
