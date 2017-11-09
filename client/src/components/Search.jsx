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
    $.ajax({
      url: '/repos',
      dataType: 'text',
      type: 'post',
      data: this.state.term,
      success: function( data){
        console.log('request was made successfully');
      },
      error: function(error){
          console.log('there was an error with the request');
      }
    });
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChanged}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;