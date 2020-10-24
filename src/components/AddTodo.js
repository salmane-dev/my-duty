import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    
    state = {
        title:''
    }
    
    onChange= (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit= (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {

        return (
            <div className={' bg-blue-200 p-4 '}>
                <form className={'m-6 flex '}  onSubmit={ this.onSubmit } >
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Add Something to do " 
                            style={{ flex: '10'}}
                            className={'p-2 '}
                            value={ this.state.title }
                            onChange={this.onChange}
                        />

                        <input 
                            type="submit" 
                            value="submit" 
                            className="btn px-12" 
                            style={{ flex: '1' }} 
                            onSubmit={ this.props.addone } 
                        />
                </form>
            </div>
        )
    }
}

// PropTypes ??
AddTodo.propType ={
    AddTodo: PropTypes.func.isRequired
} 



export default AddTodo
