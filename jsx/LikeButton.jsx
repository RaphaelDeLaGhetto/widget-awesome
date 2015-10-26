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
   * Render the component
   */
  render: function () {
    return (
      <div className='LikeButton'>
        Like
      </div>
    )
  }
})
