var SleepTest = React.createClass({

  getInitialState() {
    return {
      currentCard : 0,
      totalCards: 0,
      cardList: [],
      display: "none",
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
        btn_know: "I know",
        btn_nknow: "I don't know",
      });
    });

  },

  yes(e) {
    if (this.state.currentCard == this.state.totalCards-2) {
      this.setState({
        btn_know: "proceed to sleep learn",
        btn_nknow: "proceed to sleep learn",
      });
    }
    if (this.state.currentCard >= this.state.totalCards - 1) {
      console.log("Go to next page");
      // reset currentCard, redirect to play page
      this.setState({currentCard:0});
      this.redirect();
    } else {
      this.setState({currentCard: this.state.currentCard+1});
    }

    // record in database
    let currentCard = this.state.cardList[this.state.currentCard];
    var data = {
      "know": 1,
      "word": currentCard.word
    }
    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      url: '/quiz/reply',
      contentType:"application/json"
    })
    .done(function(data) {
      console.log('success')
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },

  no(e) {
    if (this.state.currentCard == this.state.totalCards-2) {
      this.setState({
        btn_know: "proceed to sleep learn",
        btn_nknow: "proceed to sleep learn",
      });
    }
    if (this.state.currentCard >= this.state.totalCards - 1) {
      console.log("Go to next page");
      // reset currentCard, go to player page
      this.setState({currentCard:0});
      this.redirect();
    } else {
      this.setState({currentCard: this.state.currentCard+1});
    }
    // record in database
    let currentCard = this.state.cardList[this.state.currentCard];
    var data = {
      "know": 0,
      "word": currentCard.word
    }
    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      url: '/quiz/reply',
      contentType:"application/json"
    })
    .done(function(data) {
      console.log('success')
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },

  redirect(e) {
    location.href='player';
  },

  render: function() {
    if(this.state.cardList.length == 0){
      return null;
    }
    var currentCard = this.state.cardList[this.state.currentCard];

    return (
      <div>
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
              {this.state.btn_know}
            </button>

            <button style={{float: 'right'}} className="hvr-float-shadow" onClick={this.no}>
              {this.state.btn_nknow}
            </button>

          </div>
        </div>

        <button style={{display: 'none'}} className="hvr-float-shadow" onClick={this.redirect}>
          Sleep Learn Now...
        </button>
      </div>

    );
  }
});

ReactDOM.render(
  <SleepTest/>,
  document.getElementById('root')
);
