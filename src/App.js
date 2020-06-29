import React, { Component } from 'react';
// import logo from './logo.svg';
import Cardlist from './component/cardlist/cardlist'
// import Searchfield from './component/Searchfield/searchfield'
import './App.css';
import Searchfield from './component/Searchfield/searchfield'

class App extends Component {
  constructor(){
    super();


    this.state={
      monsters:[],
      searchfeild:''

    };
    // this.handlechange=this.handlechange.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user=>this.setState({monsters:user}));
  }
  handlechange=(e)=>{
    this.setState({searchfeild:e.target.value})
  }

  render(){
    const {monsters,searchfeild}=this.state;
    const filterMonsters=monsters.filter(monster=>{
     return monster.name.toLowerCase().includes(searchfeild.toLowerCase())
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchfield placeholder='search monster' 
        handlechange= {this.handlechange}/>
        <Cardlist monster={filterMonsters}>
         </Cardlist>
        
      </div>
    );
  }
  
}

export default App;
