import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li> //key should be inserted in that particular list to uniquely identify each list item
          ))}
        </ul>
      );
  }*/

  render() {
    /*console.log(this.props.id)*/ return (
      <div>
        <h4>Counter#{this.props.id}</h4>
        <span>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncreament(this.props.counter)}>
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    if (value === 0) return "Zero";
    else return value;
  }
}

export default Counter;
