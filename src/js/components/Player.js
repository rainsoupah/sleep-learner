import React, {PropTypes} from 'react'

// to pass functions: must add {} around prop

// const playWord = ({, activeUrl, onPlay}) => {
//   onPlay(activeWord.word);
//   var sound = new Audio(activeUrl)
//   sound.addEventListener('loadedmetadata', function(){
//     sound.play()
//   })
// }

var Player = React.createClass ({
  componentDidMount: function() {
      this.props.getUrl(this.props.activeWord.word); // dont "bind", call function NOT event handler
      // console.log(this.props.activeUrl); // not updated, getUrl action has not completed
  },

  playWord() {
    var self = this
    var sound = new Audio(this.props.activeUrl)

    sound.addEventListener('loadedmetadata', function(){
      sound.play()

      if (self.props.activeIdx < self.props.allWords.length - 1) {
        self.props.getNextWord(self.props.activeIdx);
        // console.log("getNextWord completed");
        self.props.getUrl(self.props.activeWord.word);

        setTimeout(function() {
            // console.log("getUrl completed");
            self.playWord();
            // console.log("playword completed");
          }, sound.duration * 1000 + 1000)
      } else {
        console.log("end of words");
      }
    })
  },

  render(){
    return (
      <div>
        {this.props.activeWord.word} , {this.props.activeWord.defin}
        <button onClick={this.playWord}>PLAY</button>
      </div>
    )
  }

})


Player.propTypes = {
  activeWord: PropTypes.object.isRequired,
  getUrl: PropTypes.func.isRequired
}

export default Player
