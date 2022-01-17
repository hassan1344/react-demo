import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
    //imageUrl: "https://picsum.photos/200", //generates a random photo of 200 pixels
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li> //key should be inserted in that particular list to uniquely identify each list item
          ))}
        </ul>
      );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please Create a new Tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
