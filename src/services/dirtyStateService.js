function Plugin() {}

class DirtyStateService {
  constructor() {
    this._plugins = new Set()
    this._formsPlugins = new Map()
  }

  createPlugin() {
    const plugin = new Plugin()
    this._plugins.add(plugin)
    return plugin
  }

  registerFormPlugin(formName, plugin) {
    this._formsPlugins.set(formName, plugin)
  }

  removeFormPlugin(formName) {
    this._formsPlugins.delete(formName)
  }
}

export default new DirtyStateService()
