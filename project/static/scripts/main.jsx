var SleepTest = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Hello Sleep Learner</h2>
        <audio controls>
          <source src="/sound.wav" type="audio/wav" />
        </audio>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(SleepTest, null),
  document.getElementById('root')
);
