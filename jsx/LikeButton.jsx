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
    return (
      <span ref='likeButton' className='LikeButton' onClick={this.handleClick}>
        Like
      </span>
    )
  }
})
