
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
  render: function() {
    return (
      <div class="player">
        <table><tr>
          <td>
            <btn className="btn btn-default play-button">
              <i className="glyphicon glyphicon-play-circle"></i>
            </btn>
          </td>
          <td>
            <WordAndDefinition word="abscond" definition="leave hurriedly and secretly, typically to avoid detection of or arrest for an unlawful action such as theft" />
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
