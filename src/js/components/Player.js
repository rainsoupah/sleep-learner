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
      this.props.getNextUrl(this.combineWordDefin(true)); // dont "bind", call function NOT event handler
      // console.log(this.props.activeUrl); // not updated, getUrl action has not completed
  },

  // componentWillUpdate(nextProps, nextState) {
  //     console.log('Component WILL UPDATE!');
  //  },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   console.log(nextProps.updateComp);
  //   return nextProps.updateComp; //
  // },

  combineWordDefin(first=false) {
    const {allWords, activeIdx} = this.props;
    var idx = first ? activeIdx : activeIdx + 1;
    return allWords[idx].word + '.' + allWords[idx].defin;
  },

  playWord() {
    const self = this
    var sound = new Audio(this.props.activeUrl)

    sound.addEventListener('loadedmetadata', function(){
      sound.play()

      if (self.props.activeIdx < self.props.allWords.length - 1) {
        // self.props.getNextWord(self.props.activeIdx);
        // console.log("getNextWord completed");
        self.props.getNextUrl(self.combineWordDefin());

        setTimeout(function() {

            // self.props.toggleRenderComp();
            // console.log("update component");
            self.props.getNextWord(); // display next word
            self.playWord(); // recurse: play next word

          }, sound.duration * 1000 + 1500)
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


// Player.propTypes = {
//   activeWord: PropTypes.object.isRequired,
//   getUrl: PropTypes.func.isRequired
// }

export default Player
