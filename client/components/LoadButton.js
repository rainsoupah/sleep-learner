import React from 'react';
var RadioGroup = require('react-radio-group');


// Loads the button on home page
// Onclick loads checkoutPage
const LoadButton = React.createClass({
  render() {
    return (
      <div> Hello </div>
    )
  }
  // Onclick Function here:
  /*clicked(e) {
    e.preventDefault();
    console.log("Running Click!");
    // add button properties
    //this.props.power(this.refs.item.value);
  },

    getInitialState() {
    return {selectedValue: 'apple'};
  },

  // on change
  handleChange(value) {
    this.setState({selectedValue: value});
  },
  // adds button to the appropriate div on amazon client page
  render() {
    return (
      <div>
        <div>Sleep Learner</div>
        <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        <label>
          <Radio value="word1" />Word
        </label>
        <label>
          <Radio value="orange" />Orange
        </label>
        <label>
          <Radio value="watermelon" />Watermelon
        </label>
      </RadioGroup>
      </div>
    );
  }*/
});

export default LoadButton;
/*{this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}*/