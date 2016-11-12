
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
      definition: 'leave hurriedly and secretly, typically to avoid detection of or arrest for an unlawful action such as theft',
    },
  ],

  onPlayClick: function() {
    // Putting period makes it pause a little
    var word = this.wordData[0].word;
    var definition = this.wordData[0].definition;
    var textData = word + ' . ' + definition;

    $.get('/player/tts/', {
      text: textData,
    }, function(audio_url){
      var sound = new Audio(audio_url);
      sound.play();
    });
  },

  render: function() {
    return (
      <div class="player">
        <table><tr>
          <td>
            <btn className="btn btn-default play-button" onClick={this.onPlayClick}>
              <i className="glyphicon glyphicon-play-circle"></i>
            </btn>
          </td>
          <td>
            <WordAndDefinition word={this.wordData[0].word} definition={this.wordData[0].definition} />
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
