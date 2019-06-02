import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DirtyStateService from '../../services/dirtyStateService.js'

let lastFormId = 1
const getFormId = () => `Form_${lastFormId++}`

export const DirtyCheckContext = React.createContext()

export default class Form extends Component {
  static propTypes = {
    id: PropTypes.string,
  }

  constructor(props) {
    super(props)

    if (!props.dirtyStatePlugin) {
      this._dirtyStatePlugin = DirtyStateService.createPlugin()
      this.name = props.name || getFormId()
    }
  }

  state = {
    isDirty: false,
  }

  get dirtyStatePlugin() {
    return this.props.dirtyStatePlugin || this._dirtyStatePlugin
  }

  componentDidMount() {
    DirtyStateService.registerFormPlugin(this.name, this.dirtyStatePlugin)
  }

  componentWillUnmount() {
    DirtyStateService.removeFormPlugin(this.name)
  }

  handleSetDirty = isDirty => {
    console.log('isDirty', isDirty)
    this.setState({ isDirty })
  }

  render() {
    return (
      <DirtyCheckContext.Provider value={{ setDirty: this.handleSetDirty }}>
        <form>{this.props.children}</form>
      </DirtyCheckContext.Provider>
    )
  }
}
