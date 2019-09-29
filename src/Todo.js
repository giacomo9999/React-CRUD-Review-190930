import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    listItems: [
      { id: "1", title: "Buy Milk", done: false, date: new Date() },
      { id: "2", title: "Meeting with Ali", done: false, date: new Date() },
      { id: "3", title: "Tea break", done: false, date: new Date() },
      { id: "4", title: "Go for a run.", done: false, date: new Date() }
    ]
  };

  onCompleteHandle = () => {};
  onSubmitHandle = () => {};
  onEditHandle = () => {};
  onDeleteHandle = () => {};

  render() {
    return (
      <div className="container-inner">
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.title)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
