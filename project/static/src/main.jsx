class SleepTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCard : 0,
      totalCards: 0,
      cardList: [],
      alphabet: 'a',
      baseURL: '/quiz/words/',
      btn_know: "I know",
      btn_nknow: "I don't know",
    }
  }

  getData() {
    var wordsURL = this.state.baseURL + this.state.alphabet;
    // console.log(wordsURL);
    var self = this;

    $.getJSON(wordsURL, function(data){
      self.setState({
        currentCard: 0,
        totalCards: data.results.length,
        cardList: data.results,
      });
    });
  }

  componentWillMount() {
    // When component is first loaded, make AJAX call to request list of
    // words and definitions
    this.getData();
  }

  /**
   * Called when user clicks yes or no button, make POST request to the
   * server and show the next card
   */
  processUserResponse(responseYes) {
    if (this.state.currentCard == this.state.totalCards-2) {
      this.setState({
        btn_know: "proceed to sleep learn",
        btn_nknow: "proceed to sleep learn",
      });
    }
    if (this.state.currentCard >= this.state.totalCards - 1) {
      // Redirect to play page
      location.href='player';
    } else {
      this.setState({currentCard: this.state.currentCard + 1});
    }

    // record in database
    let currentCard = this.state.cardList[this.state.currentCard];

    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      data: {
        'know': responseYes,
        'word': JSON.stringify(currentCard.word),
      },
      url: '/quiz/reply',
      contentType:"application/json"
    });
  }

  onClickYes(e) {
    this.processUserResponse(1);
  }

  onClickNo(e) {
    this.processUserResponse(0);
  }


  render() {
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

            <button className="hvr-float-shadow btn btn-yes" onClick={this.onClickYes.bind(this)}>
              {this.state.btn_know}
            </button>

            <button className="hvr-float-shadow btn btn-no" onClick={this.onClickNo.bind(this)}>
              {this.state.btn_nknow}
            </button>

          </div>
        </div>
      </div>

    );
  }
}

ReactDOM.render(
  <SleepTest/>,
  document.getElementById('root')
);
