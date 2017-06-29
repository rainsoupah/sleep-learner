import React, {PropTypes} from 'react'
import Sound from 'react-sound'
import CircularProgress from 'material-ui/CircularProgress'
import LinearProgress from 'material-ui/LinearProgress'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

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

const styles = {
	cardOuter: {
		width: '600px',
		margin: '5% auto',
		height: '500px',
		padding: '2%'
	},
	cardInner: {
		width: '300px',
		margin: 'auto',
		position: 'relative',
		top: '-350px',
		height: '200px',
	},
	cardWords: {
		fontSize: '15px',
	},
	cardLearnProgress: {
		fontSize: '17px',
		textAlign: 'center',
	},
	cardControls: {
		margin: 'auto',
    width: '150px',
    position: 'relative',
    top: '-330px',
	},
	cardCircProgress: {
		width: '400px',
		height: '400px',
		margin: 'auto',
	},
	cardLinearBar: {
		width: '317px'
	}
}
var Controls = React.createClass({
	render() {
    let type;
    let nextStatus;
    if (this.props.isPlaying == Sound.status.PLAYING) {
      type = <PauseCircleOutline color="green" />
      nextStatus = 1 //paused
    } else {
      type = <PlayCircleOutline color="#00bcd4" />
      nextStatus = 0 //playing
    }
    const stop = <Stop color="black" />
    const ff = <FastForward color="#00bcd4"/>
    const fr = <FastRewind color="#00bcd4"/>

		return (
      <div style={styles.cardControls}>
        <IconButton onTouchTap={()=>this.props.backward()}>{fr}</IconButton>
				<IconButton onTouchTap={()=>this.props.toggleButton(nextStatus)}>{type}</IconButton>
        <IconButton onTouchTap={()=>this.props.forward()}>{ff}</IconButton>
      </div>

		)
	}
});

// <IconButton onTouchTap={()=>this.props.toggleButton(2)}>{stop}</IconButton>

var Progress = React.createClass({
	render() {
		// value = this.props.position
		return (
      <div style={styles.cardCircProgress}>
        <CircularProgress mode="determinate" value={0.99} max={1} size={400}/>
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

	getStudyState() {
		return (this.props.activeIdx/this.props.allWords.length)
	},

  render(){
    return (
				<Card style={styles.cardOuter}>
					<Progress
							elapsed={this.props.progress.elapsed}
							total={this.props.progress.total}
							position={this.props.progress.position}>
					</Progress>
					<CardText style={styles.cardLearnProgress} className="row">
							<div className="col-sm-4">
								  WORDS STUDIED: {this.props.activeIdx}/{this.props.allWords.length}
							</div>
							<div className="col-sm-8">
									<LinearProgress mode="determinate" value={this.getStudyState()} style={styles.cardLinearBar}/>
							</div>
					</CardText>

					<Card style={styles.cardInner}>
						<CardHeader style={styles.cardWords}
							title={this.props.activeWord.word}
							subtitle={this.props.activeWord.defin}/>
						<CardText>
							{this.props.progress.elapsed}/{this.props.progress.total}
						</CardText>
					</Card>

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
				</Card>
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
