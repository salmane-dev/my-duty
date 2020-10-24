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
        console.log(this.props.todo.title)
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
        return (
            <div >
                <div className={ todoStyle } style={ this.MyStyles()} >
                    <div className={'self-start '}>
                        <i className={ iconStyle } style={ this.Mytimes() }
                        onClick={ this.props.btndelete.bind(this, this.props.todo.id) }>
                        </i> 
                        <input type="checkbox"
                        className="my-auto  mx-2"
                        id={this.props.todo.id}
                        onChange={ this.props.Mytoggle.bind(this, this.props.todo.id) }
                        checked={ this.props.todo.completed }
                        />
                        <time className={'mx-2 text-base'} >{this.props.todo.timestamp}</time>
                        <br/>
                        <i className={ avatarStyle }></i>

                    </div>
                    <label className={' text-right  '} style={ this.Linethrough()} htmlFor={this.props.todo.id} >
                        <span className={'text-xl font-semibold'} >{this.props.todo.title}</span>
                        <i className={ 'fas fa-dot-circle ml-2 text-red-500 ' } style={ this.priroty() } > </i>
                        <br/><small className={ 'float-right mr-2' }> qwod qwiodofhhofqoiwf qasd asdffff -</small>
                        <br/><small className={ 'float-right mr-2' }> qwod qwiodofh ofdsd sdf - </small>
                    </label>
                </div>
            </div>
        )
    }

}

const todoStyle = 'mt-2 mx-4 p-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg   '
const iconStyle = 'fas fa-times cursor-pointer text-xl text-red-600 hover:text-red-700 hover:text-xl'
const avatarStyle = 'fas fa-user p-3 mb-2 text-xl bg-teal-400 rounded-full'


// PropTypes ??
TodoItem.propType ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired
} 

export default TodoItem
