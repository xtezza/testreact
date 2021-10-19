import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        element: '',
        items: []
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            element: '',
            items: [...this.state.items, { element: this.state.element }]
        })
    }

    renderTodo = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item.element} <i class="fas fa-times" onClick={() => this.deleteItem(index)}></i></h4>
                    </div>
                </div>
            )
        })
    }

    deleteItem = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1)
        this.setState({
            items: arr
        })
    }

    render() {
        return (
            <>
                <div className="card my-3">
                    <div className="card-header">To Do List</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="element">A faire</label>
                                <input type="text"
                                    className="form-control"
                                    name="element"
                                    onChange={this.onChange}
                                    value={this.state.element} />
                            </div>
                            <button className="btn btn-primary btn-block my-3">Ajouter la chose à faire</button>
                        </form>
                    </div>
                </div >
                {this.renderTodo()}
            </>
        )
    }
}
