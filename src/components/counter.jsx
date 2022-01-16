import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    //imageUrl: "https://picsum.photos/200", //generates a random photo of 200 pixels
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-primary">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "alert alert-";
    classes += this.state.count === 0 ? "success" : "danger";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
