import React, { useState, useRef } from 'react'
import './App.scss'
import { Form, Input } from './components'

function App() {
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [inputValue3, setInputValue3] = useState('')
  const inputRef = useRef(null)

  return (
    <div className="container">
      <Form>
        <Input
          label="My Input 1"
          name="input1"
          id="test1"
          value={inputValue1}
          onChange={(value, name) => {
            setInputValue1(value)
          }}
        />
        <Input
          label="My Input 2"
          name="input2"
          id="test2"
          ref={inputRef}
          value={inputValue2}
          onChange={(value, name) => {
            setInputValue2(value)
          }}
        />
        <Input
          label="My Input 3"
          name="input3"
          id="test3"
          value={inputValue3}
          onChange={(value, name) => {
            setInputValue3(value)
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
