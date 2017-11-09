import sampleData from '../../data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: props.repos
    }

    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
     // dataType: 'json',
      //contentType: 'application/json',
      method: 'POST',
      data: {term},
     // data: JSON.stringify({inputValue: this.state.term}),
      success: function( data){
        console.log('request was made successfully');
      },
      error: function(error){
          console.log('there was an error with the request');
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App repos={sampleData}/>, document.getElementById('app'));