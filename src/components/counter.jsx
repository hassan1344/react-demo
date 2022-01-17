import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    //imageUrl: "https://picsum.photos/200", //generates a random photo of 200 pixels
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-primary">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li> //key should be inserted in that particular list to uniquely identify each list item
          ))}
        </ul>
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
