var React = require('react')

module.exports = React.createClass({
  displayName: 'LikeButton.jsx',

  /**
   * getInitialState
   */
  getInitialState: function () {
    return {
      liked: false
    }
  },

  /**
   * handleClick
   */
  handleClick: function () {
    this.setState({
      liked: true
    })
  },

  /**
   * Render the component
   */
  render: function () {
    var message = 'Like'
    var icon = 'glyphicon glyphicon-heart-empty'
    if (this.state.liked) {
      message = 'You like this!'
      icon = 'glyphicon glyphicon-heart'
    }
    return (
      <button ref='likeButton' className='btn btn-default' onClick={this.handleClick}>
        {message} <span className={icon} />
      </button>
    )
  }
})
