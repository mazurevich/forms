import React, { useState, useRef } from 'react'
import './App.scss'
import { Form, Input } from './components'

function App() {
  const [inputValue1, setInputValue1] = useState('')
  const inputRef = useRef(null)

  return (
    <div className="container">
      <Form>
        <Input
          label="My Input 1"
          name="input1"
          id="test1"
          ref={inputRef}
          value={inputValue1}
          onChange={(value, name) => {
            setInputValue1(value)
          }}
        />
        <button
          type="button"
          onClick={() => {
            inputRef.current.focus()
          }}
        >
          Focus
        </button>
      </Form>
    </div>
  )
}

export default App

// tess
