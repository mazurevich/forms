import React from 'react'
import withDirtyCheck from './withDirtyCheck.js'

function Input(props) {
  const { label, onChange, forwardedRef, ...rest } = props

  return (
    <span>
      {label && <label>{label}</label>}
      <input
        ref={forwardedRef}
        type="text"
        {...rest}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </span>
  )
}

const InputWithRef = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
})

export default withDirtyCheck()(InputWithRef)
// export default Input
