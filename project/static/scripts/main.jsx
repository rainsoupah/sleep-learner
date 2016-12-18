var SleepTest = React.createClass({

  getInitialState() {
    return {
      currentCard : 0,
      totalCards: 0,
      cardList: [],
    };
  },

  componentWillMount() {
    var self = this;

    // When component is first loaded, make AJAX call to request list of
    // words and definitions
    $.getJSON('/quiz/words', function(data){
      self.setState({
        currentCard: 0,
        totalCards: data.results.length,
        cardList: data.results,
      });
    });
  },

  yes(e) {
    if (this.state.currentCard >= this.state.totalCards - 1) {
      console.log("Go to next page");
      // reset currentCard, go to different react router
      this.setState({currentCard:0});
    } else {
      this.setState({currentCard: this.state.currentCard+1});
      // record in database
    }

  },

  no(e) {
    if (this.state.currentCard >= this.state.totalCards - 1) {
      console.log("Go to next page");
      // reset currentCard, go to different react router
      this.setState({currentCard:0});
    } else {
      this.setState({currentCard: this.state.currentCard+1});
      // record in database
    }
  },

  render: function() {
    if(this.state.cardList.length == 0){
      return null;
    }

    var currentCard = this.state.cardList[this.state.currentCard];

    return (
      <div className="card">
        <div className="front">
          <h2>
            Word {this.state.currentCard+1}/{this.state.totalCards}
          </h2>

          <div className="subheader">
            {currentCard.word}
          </div>

          <p>
            {currentCard.defin}
          </p>

          <button className="hvr-float-shadow" onClick={this.yes}>
            I know
          </button>

          <button style={{float: 'right'}} className="hvr-float-shadow" onClick={this.no}>
            I don't know
          </button>

        </div>

      </div>
    );
  }
});

ReactDOM.render(
  <SleepTest/>,
  document.getElementById('root')
);
