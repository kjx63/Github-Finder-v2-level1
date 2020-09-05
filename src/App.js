import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type },
    });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/'>
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              </Route>
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
