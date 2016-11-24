var SleepTest = React.createClass({
  getInitialState() {
    return {
      currentCard : 1,
      totalCards: 10,
      wordSet: {}
    };
  },

  yes(e) {
    //document.querySelector('.card').classList.toggle('flipped');
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
    //document.querySelector('.card').classList.toggle('flipped');
    if (this.state.currentCard >= this.state.totalCards) {
      console.log("Go to next page");
      // reset currentCard, go to different react router
      this.setState({currentCard:1});
    } else {
      this.setState({currentCard: this.state.currentCard+1});
      // record in database
    }
  },

  handleData:function(data) {
    word = data.results[this.state.currentCard-1];
    this.setState({wordSet:word});
  },

  render: function() {
    var yes = "I know";
    var no = "I don't know";

    // ajax request word call
    $.getJSON('/player/words', this.handleData);

    return (
      <div className="card">
        <div className="front">
          <h2>Word {this.state.currentCard}/{this.state.totalCards}</h2>
          <div className="subheader">{this.state.wordSet.word}</div>
          <p>{this.state.wordSet.defin}</p>
          <button className="hvr-float-shadow" onClick={this.yes}>{yes}</button>
          <button style={{float: 'right'}} className="hvr-float-shadow" onClick={this.no}>{no}</button>
        </div>

      </div>
    );
  }
});

ReactDOM.render(
  <SleepTest/>,
  document.getElementById('root')
);

    /*// Alternative: infinite loop over data do not use
    $.ajax({
      url: "/player/words",
      type: 'GET',
      success: function(data) {
        console.log("got word");
        //word = data.results[0];
        word = data.results[this.state.currentCard-1];
        this.setState({wordSet:word});
      }
    });*/
