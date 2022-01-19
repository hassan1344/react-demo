import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1"],
    //imageUrl: "https://picsum.photos/200", //generates a random photo of 200 pixels
  };

  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

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

  handleIncreament = (product) => {
    //console.log("Increament Clicked!", this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please Create a new Tag!"}
        {this.renderTags()}
        <span>{this.formatCount()}</span>
        <button onClick={() => this.handleIncreament({ id: 1 })}>
          Increament
        </button>
      </div>
    );
  }

  formatCount() {
    return this.state.count;
  }
}

export default Counter;
