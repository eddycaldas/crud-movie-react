import React, { Component } from 'react';
// import Movies from './components/pages/Movies'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  
  ComponentDidMount() {
    fetch("https://jsonmovies.herokuapp.com/movie/")
    .then((res) => res.json())
    .then(
      (result) => {
      console.log(result.items);
      })
    }
  
  
  render() {
    return (
      <div className="App">



      </div>
    );
  }
}

export default App;
