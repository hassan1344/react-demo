import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
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
    return this.state.value;
  }
}

export default Counter;
