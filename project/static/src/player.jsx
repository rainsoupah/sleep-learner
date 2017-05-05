
class WordAndDefinition extends React.Component {
  render() {
    return (
      <div className="word-and-definition">
        <p className="word-itself">{this.props.word}</p>
        <p className="word-definition">{this.props.definition}</p>
      </div>
    );
  }
}

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      currentIndex: 0,
      wordData: [],
    };
  }

  componentWillMount() {
    var self = this;
    $.getJSON('/player/words', function(data){
      self.setState({
        wordData: data.results,
      });
    });
  }

  onPlayClick() {
    if(this.state.isPlaying){
      this.setState({'isPlaying': false});
    }
    else{
      this.setState({'isPlaying': true}, function(){
        this.playWord();
      });
    }
  }

  playWord() {
    var self = this;
    if(!this.state.isPlaying) {
      return;
    }

    // Putting period makes it pause a little
    var ix = this.state.currentIndex;
    var word = this.state.wordData[ix].word;
    var definition = this.state.wordData[ix].defin;
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
          if(ix < self.state.wordData.length - 1){
            self.setState({'currentIndex': ix+1}, function(){
              self.playWord();
            });
          }
          else{
            self.setState({'currentIndex': 0, 'isPlaying': false});
          }
        }, sound.duration * 1000 + 1000);
      });
    });
  }

  render() {
    if(this.state.wordData.length == 0){
      return null;
    }

    var ix = this.state.currentIndex;
    var word = this.state.wordData[ix].word;
    var definition = this.state.wordData[ix].defin;
    var classNames = 'glyphicon ' +
      (this.state.isPlaying ? 'glyphicon-pause' : 'glyphicon-play');

    return (
      <div class="player">
        <table><tr>
          <td>
            <btn className="btn btn-default play-button" onClick={this.onPlayClick.bind(this)}>
              <i className={classNames}></i>
            </btn>
          </td>
          <td>
            <WordAndDefinition word={word} definition={definition} />
          </td>
        </tr></table>
      </div>
    );
  }
}

ReactDOM.render(
  <Player />,
  document.getElementById('root')
);
