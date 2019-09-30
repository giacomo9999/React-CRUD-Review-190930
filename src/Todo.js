import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    title: "",
    listItems: [
      { id: "1", title: "Make sauce", done: false, date: new Date() },
      { id: "2", title: "Boil noodles", done: false, date: new Date() },
      {
        id: "3",
        title: "Layer noodles and sauce",
        done: false,
        date: new Date()
      },
      { id: "4", title: "Bake lasagna", done: false, date: new Date() }
    ]
  };

  onCompleteHandle = itemId => {
    console.log("onCompleteHandle reporting", itemId);
  };

  onSubmitHandle = e => {
    console.log("onSubmitHandle reporting", e.target.item.value);
    this.setState({
      listItems: [
        ...this.state.listItems,
        {
          id: Date.now(),
          title: e.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    e.target.item.value = "";
    e.preventDefault();
  };

  onEditHandle = (itemId, itemTitle) => {
    console.log("onEditHandle reporting", itemId, itemTitle);
    this.setState({ edit: true, id: itemId, title: itemTitle });
    console.log(this.state);
  };

  onUpdateHandle = e => {
    e.preventDefault();
    this.setState({
      listItems: this.state.listItems.map(entry => {
        if (entry.id === this.state.id) {
          entry.title = e.target.updatedItem.value;
        }
        return entry;
      })
    });
    this.setState({ edit: false });
  };

  onDeleteHandle = itemId => {
    console.log("onDeleteHandle reporting", itemId);
    this.setState({
      listItems: this.state.listItems.filter(entry => entry.id !== itemId)
    });
  };

  onCompleteHandle = id => {
    this.setState({
      listItems: this.state.listItems.map(entry => {
        if (entry.id === id) {
          entry.done = true;
        }
        return entry;
      })
    });
  };

  renderEditForm = () => {
    if (this.state.edit) {
      return (
        <form className="h-form" onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="h-input"
            defaultValue={this.state.title}
          />
          <button className="h-btn">Update</button>
        </form>
      );
    }
  };

  render() {
    return (
      <div className="container-inner">
        {this.renderEditForm()}
        <form className="h-form" onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="h-input" />
          <button className="h-btn">Add Item</button>
        </form>
        <table>
          <tbody>
            {this.state.listItems.map(item => (
              <tr key={item.id}>
                <td className={item.done ? "done" : "hidden"}>{item.title}</td>
                <td>
                  <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={this.onEditHandle.bind(this, item.id, item.title)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={this.onCompleteHandle.bind(this, item.id)}>
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Todo;
