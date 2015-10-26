jest.dontMock('../jsx/LikeButton.jsx')
var LikeButton = require('../jsx/LikeButton.jsx')

var React = require('react')
var TestUtils = require('react-addons-test-utils')

describe('LikeButton', function () {

  /**
   * getInitialState
   */
  it('should set the initial liked state to false', function () {
    var likeButton = TestUtils.renderIntoDocument(<LikeButton />)
    expect(likeButton.state.liked).toBe(false)
  })
})
