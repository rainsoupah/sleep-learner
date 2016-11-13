function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}

var SleepTest = React.createClass({
  getInitialState() {
    return { 
      currentCard : 1,
      totalCards: 10
    };
  },

  yes(e) {
    if (this.state.currentCard >= this.state.totalCards) {
      console.log("Go to next page");
      // reset currentCard, go to different react router
      this.setState({currentCard:1});
    } else {
      this.setState({currentCard: this.state.currentCard+1});
      // record in database
    }

  },

  no(e) {
    this.setState({currentCard: this.state.currentCard+1});
  },

  flip(e) {
    document.querySelector('.card').classList.toggle('flipped');
  },

  render: function() {
    var yes = "I know";
    var no = "I don't know";
    var defin = "treating serious issues with deliberately inappropriate humor; flippant.late 16th century (in the general sense ‘witty, amusing’): from French facétieux, from facétie, from Latin facetia ‘jest,’ from facetus ‘witty.’"

    return (
      <div className="card" onClick={this.flip}>
        <div className="front">
          <h2>Word {this.state.currentCard}/{this.state.totalCards}</h2>
          <div className="subheader">{this.props.word}</div>
          <p>{defin}</p>
          <button className="Green" onClick={this.yes}>{yes}</button>
          <button className="Red" onClick={this.no}>{no}</button>
        </div>
        
      </div>   
    );
  }
});

ReactDOM.render(
  <SleepTest word="Facetious"/>,
  document.getElementById('root')
);
