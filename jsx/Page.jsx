var React = require('react')
var Header = require('./Header.jsx')
var LikeButton = require('./LikeButton.jsx')

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  render: function () {
    var title = 'Puppies?'

    var header = <Header title={title} />
    return (
      <div className='Page'>
        {header}
        <div>
          <LikeButton />
        </div>
        <div>
          <LikeButton />
        </div>
        <div>
          <LikeButton />
        </div>
        <div>
          <LikeButton />
        </div>
      </div>
    )
  }
})
