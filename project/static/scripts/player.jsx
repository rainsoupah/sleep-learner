
var WordAndDefinition = React.createClass({
  render: function() {
    return (
      <div className="word-and-definition">
        <p className="word-itself">{this.props.word}</p>
        <p className="word-definition">{this.props.definition}</p>
      </div>
    );
  },
});

var Player = React.createClass({

  wordData: [
    {
      word: 'abscond',
      definition: 'run away, often taking something or somebody along',
    },
    {
      word: 'abstruse',
      definition: 'difficult to penetrate',
    },
    {
      word: 'accede',
      definition: 'yield to another\'s wish or opinion',
    },
    {
      word: 'accost',
      definition: 'speak to someone',
    },
  ],

  getInitialState: function() {
    return {
      isPlaying: false,
      currentIndex: 0,
    };
  },

  onPlayClick: function() {
    this.setState({'isPlaying': true}, function(){
      this.playWord();
    });
  },

  playWord: function() {
    var self = this;
    if(!this.state.isPlaying) {
      return;
    }

    // Putting period makes it pause a little
    var ix = this.state.currentIndex;
    var word = this.wordData[ix].word;
    var definition = this.wordData[ix].definition;
    var textData = word + ' . ' + definition;

    // Request TTS and get audio URL
    $.get('/player/tts/', {
      text: textData,
    }, function(audio_url){

      // Retrieve audio WAVE file
      var sound = new Audio(audio_url);
      sound.addEventListener('loadedmetadata', function(){

        sound.play();

        // Wait for it to finish
        setTimeout(function(){
          // Do next one
          self.setState({'currentIndex': self.state.currentIndex+1}, function(){
            self.playWord();
          });
        }, sound.duration * 1000 + 1000);
      });
    });
  },

  render: function() {
    var ix = this.state.currentIndex;
    var word = this.wordData[ix].word;
    var definition = this.wordData[ix].definition;
    return (
      <div class="player">
        <table><tr>
          <td>
            <btn className="btn btn-default play-button" onClick={this.onPlayClick}>
              <i className="glyphicon glyphicon-play-circle"></i>
            </btn>
          </td>
          <td>
            <WordAndDefinition word={word} definition={definition} />
          </td>
        </tr></table>
      </div>
    );
  },
});

ReactDOM.render(
  <Player />,
  document.getElementById('root')
);
