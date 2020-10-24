import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


export default class Todos extends Component {

    render() {
        return (
         <div className={'mt-6'}>
             <h2 className={'text-2xl font-bold'}> To dos </h2>
             {
                this.props.todos.map((todo) => (
                    <TodoItem
                    key={todo.id}
                    todo={todo} 
                    className={ ' mt-4 ' }
                    Mytoggle={ this.props.Mytoggle } 
                    btndelete={ this.props.btndelete }
                    />
                ))
             }
         </div>
               
        
        )
    }
}


// PropTypes ??
Todos.propType ={
   todo: PropTypes.array.isRequired,
   markComplete: PropTypes.func.isRequired, 
   delTodo: PropTypes.func.isRequired
}
