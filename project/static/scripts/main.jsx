var SleepTest = React.createClass({
  getInitialState() {
    return { 
      currentCard : 1,
      totalCards: 100
    };
  },

  ClickYES(e) {
    console.log("CLicked Yes");
    this.setState({currentCard: this.state.currentCard+1});

  },

  ClickNO(e) {
    console.log("Clicked No");
    this.setState({currentCard: this.state.currentCard+1});
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.currentCard}/{this.state.totalCards}</h2>
        <div>
        <p>{this.props.word}</p>
         <button className="btn btn-default" onClick={this.ClickYES}>YES</button>
         <button className="btn btn-default" onClick={this.ClickNO}>NO</button>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <SleepTest word="Facetious"/>,
  document.getElementById('root')
);
