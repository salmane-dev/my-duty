import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    MyStyles = () => {
        return {
            display : 'flex',
            alignItems : 'center',
            justifyContent: 'space-between',  
            //textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
   }

   Linethrough = () => {
        return {  
            display:'inline-block',
            maxWidth:'80%',
            padding:'0 10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }


    priroty = () => {
     //   console.log(this.props.todo.title)
        if(this.props.todo.priority===1) return {color:'red'}
        if(this.props.todo.priority===2) return {color:'yellow'}
        if(this.props.todo.priority===3) return {color:'green'}
    }

   Mytimes = () => {
    return {
        textDecoration: 'inherit'
    }
   }



  
   

    render() {
        
        this.props.todo.tasks.map((task) => (
            console.log(task)  
        ))

        return (
            <div >
                <div className={ todoStyle } style={ this.MyStyles()} >
                    <div className={' h-100 left text-left'}>
                        <div>
                            <i className={ iconStyle } style={ this.Mytimes() }
                                onClick={ this.props.btndelete.bind(this, this.props.todo.id) }>
                            </i> 
                            <input type="checkbox"
                                className="my-auto  mx-2"
                                id={this.props.todo.id}
                                onChange={ this.props.Mytoggle.bind(this, this.props.todo.id) }
                                checked={ this.props.todo.completed }
                            />
                        </div>
                       
                        <div>
                            <i className={ avatarStyle }></i>
                            <i className={ avatarStyle }></i>
                            <i className={ avatarStyle }></i>
                        </div>
                        <div>
                            <time className={''} >{this.props.todo.timestamp}</time>
                        </div>
                    </div>
                    <label className={'text-right'} style={ this.Linethrough()} htmlFor={this.props.todo.id} >
                        <span className={'text-xl font-semibold'} >{this.props.todo.title}</span>
                        <i className={ 'fas fa-dot-circle ml-2 text-red-500 ' } style={ this.priroty() } > </i>
                        <br/><small className={ 'float-right mr-2' }> { this.props.todo.tasks ? this.props.todo.tasks[0] : 'no tasks' } - </small>

                        
                    </label>
                </div>
            </div>
        )
    }
}

const todoStyle = 'mt-2 mx-4 p-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg'
const iconStyle = 'fas fa-times cursor-pointer text-lg text-red-600 hover:text-red-700 hover:text-xl'
const avatarStyle = 'fas fa-user p-2 mr-1 text-ls bg-teal-600 rounded-full float-left'


// PropTypes ??
TodoItem.propType ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired
} 

export default TodoItem
