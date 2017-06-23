import React, {PropTypes} from 'react'
import Sound from 'react-sound'
import LinearProgress from 'material-ui/LinearProgress';

// UI ------------------------------------------------------------------------
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline'
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline'
import Stop from 'material-ui/svg-icons/av/stop'
import FastForward from 'material-ui/svg-icons/av/fast-forward'
import FastRewind from 'material-ui/svg-icons/av/fast-rewind'
import IconButton from 'material-ui/IconButton'

// to pass functions: must add {} around prop

// const playWord = ({, activeUrl, onPlay}) => {
//   onPlay(activeWord.word);
//   var sound = new Audio(activeUrl)
//   sound.addEventListener('loadedmetadata', function(){
//     sound.play()
//   })
// }

var Controls = React.createClass({
	render() {
    let type;
    let nextStatus;
    if (this.props.isPlaying == Sound.status.PLAYING) {
      type = <PauseCircleOutline color="black" />
      nextStatus = 1 //paused
    } else {
      type = <PlayCircleOutline color="black" />
      nextStatus = 0 //playing
    }
    const stop = <Stop color="black" />
    const ff = <FastForward color="black"/>
    const fr = <FastRewind color="black"/>

		return (
      <div>
        <IconButton onTouchTap={()=>this.props.toggleButton(nextStatus)}>{type}</IconButton>
        <IconButton onTouchTap={()=>this.props.toggleButton(2)}>{stop}</IconButton>
        <IconButton onTouchTap={()=>this.props.forward()}>{ff}</IconButton>
        <IconButton onTouchTap={()=>this.props.backward()}>{fr}</IconButton>
      </div>

		)
	}
});

var Progress = React.createClass({
	render() {

		return (
      <div>
        <LinearProgress mode="determinate" value={this.props.position} max={1} />
      </div>

		)
	}
});

var Player = React.createClass ({
  componentDidMount: function() {
      this.props.getNextUrl(this.combineWordDefin(true)); // dont "bind", call function NOT event handler
      // console.log(this.props.activeUrl); // not updated, getUrl action has not completed
      // document.document.getElementsByTagName("Audio").addEventListener('ended', this.getNextTrack());
  },

  componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   console.log(nextProps.updateComp);
  //   return nextProps.updateComp; //
  // },

  combineWordDefin(first=false) {
    const {allWords, activeIdx} = this.props;
    var idx = first ? activeIdx : activeIdx + 1;
    return allWords[idx].word + '.' + allWords[idx].defin;
  },

  getNextTrack() {
    const _this = this;

    if (this.props.activeIdx < this.props.allWords.length-1) {
      this.props.getNextUrl(this.combineWordDefin());
      setTimeout(function() {
        _this.props.getNextWord(); // display next word
      }, 750)
    } else {
      console.log("end of words");
    }
  },

  handlePlaying(audio) {
    var elapsed, position, total;
    elapsed = this.formatMilliseconds(audio.position)
    total = this.formatMilliseconds(audio.duration)
    position = audio.position / audio.duration
    this.props.handleProgress(elapsed, total, position)
  },


  formatMilliseconds(milliseconds) {
     var hours = Math.floor(milliseconds / 3600000);
     milliseconds = milliseconds % 3600000;
     var minutes = Math.floor(milliseconds / 60000);
     milliseconds = milliseconds % 60000;
     var seconds = Math.floor(milliseconds / 1000);
     milliseconds = Math.floor(milliseconds % 1000);

     return (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
  },

  render(){
    return (
      <div>
        {this.props.activeWord.word} , {this.props.activeWord.defin}
        <Controls isPlaying={this.props.playStatus}
                  toggleButton={this.props.updateStatus}
                  forward={this.props.forward}
                  backward={this.props.backward}
                  />
        <Sound url={this.props.activeUrl}
              playStatus={this.props.playStatus}
              onPlaying={this.handlePlaying}
              playFromPosition={this.props.playFromPosn}
              onFinishedPlaying={this.getNextTrack} />
        <Progress
            elapsed={this.props.progress.elapsed}
            total={this.props.progress.total}
            position={this.props.progress.position}/>
      </div>
    )
  }

})


Player.propTypes = {
  activeWord: PropTypes.object.isRequired,
  activeIdx: PropTypes.number.isRequired,
  activeUrl: PropTypes.string.isRequired,
  allWords:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  getNextUrl: PropTypes.func.isRequired,
  getNextWord: PropTypes.func.isRequired

}

export default Player

// playWord() {
//   const self = this
//   var sound = new Audio(this.props.activeUrl)
//
//   sound.addEventListener('loadedmetadata', function(){
//       sound.play()
//
//       if (self.props.activeIdx < self.props.allWords.length - 1) {
//         // self.props.getNextWord(self.props.activeIdx);
//         // console.log("getNextWord completed");
//         self.props.getNextUrl(self.combineWordDefin());
//
//         setTimeout(function() {
//
//             // self.props.toggleRenderComp();
//             // console.log("update component");
//             self.props.getNextWord(); // display next word
//             self.playWord(); // recurse: play next word
//
//           }, sound.duration * 1000 + 1500)
//       } else {
//         console.log("end of words");
//       }
//     })
//
// },

// toggleButton() {
//   // let status = this.props.playStatus
//   // var audio = new Audio(this.props.activeUrl)
//   // // audio.controls = true
//   // // audio.load()
//   // // console.log(audio);
//   //
//   // if(status === 'play') {
//   //
//   //   audio.play()
//   // } else {
//   //   console.log("togglePlay called: audio will be played")
//   //   audio.pause()
//   // }
//   this.props.updateStatus();
// },
