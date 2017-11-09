import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChanged = this.onChanged.bind(this);
    this.search = this.search.bind(this);
  }

  onChanged (e) { 
    this.setState({
      term: e.target.value
    });
  }
  
  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: 
      <input value={this.state.terms} onChange={this.onChanged}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;