import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className='btn btn-dark btn-block'
            type='submit'
            value='Search'
          />
        </form>
      </div>
    );
  }
}

export default Search;
