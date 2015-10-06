// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Shared scope
var that

// Define class.
class Button extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    that = this
  }

  onClick (e) {
    const onClick = that.props.onClick

    // Exit, if no callback.
    if (typeof onClick !== 'function') {
      return
    }

    onClick(e)
  }

  // Render method.
  render () {
    const disabled = this.props.disabled
    const text = this.props.text
    const type = this.props.type

    return (
      <button
        className={style['t7-form__button']}
        disabled={disabled}
        type={type}
        onClick={this.onClick}
      >{text}</button>
    )
  }
}

// Validation.
Button.propTypes = {
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  type: React.PropTypes.string,

  // Events.
  onClick: React.PropTypes.func
}

// Prop defaults.
Button.defaultProps = {
  disabled: false,
  text: 'Button Text',
  type: 'button',

  // Events.
  onClick: function (e) {
    utils.log(e)
  }
}

// Export.
export default Button
