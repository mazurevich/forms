import { DirtyCheckContext } from './Form.js'
import React, { PureComponent } from 'react'

export default function withDirtyCheck({ watchProp = 'value' } = {}) {
  return function(WrappedComponent) {
    class WithDirtyCheck extends PureComponent {
      static contextType = DirtyCheckContext

      static displayName = `withDirtyCheck(${WrappedComponent.name})`

      componentDidUpdate(prevProps, prevState) {
        const { watchProp } = this.props

        if (prevProps[watchProp] !== this.props[watchProp]) {
          this.context.setDirty(true)
        }
      }

      handleChange = (value, ...args) => {
        const { onChange, name } = this.props
        if (typeof onChange === 'function') {
          onChange(value, name, ...args)
        }
      }

      render() {
        const { forwardedRef, ...rest } = this.props
        return (
          <WrappedComponent
            {...rest}
            ref={forwardedRef}
            onChange={this.handleChange}
          />
        )
      }
    }

    return React.forwardRef((props, ref) => {
      return <WithDirtyCheck {...props} forwardedRef={ref} />
    })
  }
}
