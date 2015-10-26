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

  /**
   * handleClick
   */
  it('should set the liked state to true after clicking', function () {
    var likeButton = TestUtils.renderIntoDocument(<LikeButton />)
    expect(likeButton.state.liked).toBe(false)

    TestUtils.Simulate.click(likeButton.refs.likeButton)
    expect(likeButton.state.liked).toBe(true)
  })

  it('should not change liked state on subsequent clicks', function () {
    var likeButton = TestUtils.renderIntoDocument(<LikeButton />)
    expect(likeButton.state.liked).toBe(false)

    // Click once
    TestUtils.Simulate.click(likeButton.refs.likeButton)
    expect(likeButton.state.liked).toBe(true)

    // Click again
    TestUtils.Simulate.click(likeButton.refs.likeButton)
    expect(likeButton.state.liked).toBe(true)
  })
})
