import React, { Component } from "react"
//import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header' 
import Hero from './components/Hero' 
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import Duties from './components/Duties' 
import Todos from './components/Todos' 
import AddTodo from "./components/AddTodo.js"

import './App.css';
import './styles/main.css';



class App extends Component {
    constructor(props){
      // console.log('app constructor s')
      super(props)
      this.state = { title: " React ", isShowing: false }
      this.state = { title: "quote", author: 'anonymous' }
      this.state = { title: "dates", gregorian:'',  hijri:'' }
      this.state = {  todos: [
         {
          id:uuidv4(),
          title: 'Dinner with the wife',
          completed: false ,
          priority: 1,
          timestamp: Date().slice(16,21)
        },
        {
          id:uuidv4(),
          title: 'Take out the trash',
          completed: false,
          priority: 2,
          timestamp: Date().slice(16,21)
        },{
          id:uuidv4(),
          title: 'fun with the kiddos',
          completed: false,
          priority: 3,
          timestamp: Date().slice(16,21)
        }
      ] }
    }

    componentDidMount(){ 
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
        //     .then(res => this.setState({ todos :  res.data }))

        //get quote
           fetch( 'https://favqs.com/api/qotd')
                .then(response => response.json())
                .then((json) => this.setState({ quote :  json.quote.body, author: json.quote.author  }))
        
        //get date
        let h_date = new Date().toLocaleDateString('ar-SA', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
        let g_date = new Date().toLocaleString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
        this.setState({dates: g_date, gregorian:g_date, hijri: h_date})
    }
    
    componentDidUpdate(){
      //  console.log('Updates UUUUU')
    }
    
    // toggle check box
    Mytoggle = (id) => {  
      this.setState({
          todos: this.state.todos.map(todo => {
              if(todo.id === id) todo.completed = !todo.completed
              return todo
          } )
      })
    }


    // delete todo 
    btndelete = (id) => {

      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res => this.setState({
              todos:[
              ...this.state.todos.filter(todo => todo.id !== id)
              ]
        }) )
    }

    // add to do 
    addTodo = (title) => {
    if(title !== ''){
      const newTodo = {
          id:uuidv4(),    
          title,
          completed: false,
          priority: 2,
          timestamp: Date().slice(16,21)
      }
      this.setState({ todos:[...this.state.todos, newTodo] })
    }
    else{
        alert('will you type something please !?')
    }
      
    }

    componentWillUnmount(){
      this.setState({
          todos:['']
      })
    }

  render(){
    return (
      <div className="App">
        <Header />
        <Hero 
          quote={this.state.quote} 
          author={this.state.author}
          date_Gregorian={this.state.gregorian}
          date_hijri={this.state.hijri}
        />
        <Duties />
        <Todos 
            todos={this.state.todos} 
            className=" p-12 m-2"  
            Mytoggle={this.Mytoggle }  
            btndelete={this.btndelete }
        />
        <br/>
        <AddTodo addone={ this.addone } addTodo={ this.addTodo } />
        <small className={ 'text-red-600 ' }> { } </small>  
        <br/>
        
      </div>
    );
  }
}

export default App;
