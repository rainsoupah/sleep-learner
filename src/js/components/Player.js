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
      console.log(this.props.activeUrl);
  },

  render(){
    return (
      <div>
        {this.props.activeWord.word} , {this.props.activeWord.defin}
        <button onClick={() => {
            var sound = new Audio(this.props.activeUrl)
            sound.addEventListener('loadedmetadata', function(){
              sound.play()
            })
          }}>PLAY</button>
      </div>
    )
  }

})


Player.propTypes = {
  activeWord: PropTypes.object.isRequired,
  getUrl: PropTypes.func.isRequired
}

export default Player
