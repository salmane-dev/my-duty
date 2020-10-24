 import React, { Component } from 'react'
 import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


export default class Todos extends Component {

     render() {
         return (
            this.props.todos.map((todo) => (
                 <TodoItem
                    key={todo.id}
                    todo={todo} 
                    Mytoggle={ this.props.Mytoggle } 
                    btndelete={ this.props.btndelete }
                />
         )
         ))
     }
 }
 

// PropTypes ??
Todos.propType ={
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired
}
