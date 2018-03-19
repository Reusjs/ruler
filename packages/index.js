import Button from './button';
import Icon from './icon'
import Menu from './menu'

const components = {
  Button,
  Icon,
  Menu,
  Submenu: Menu.Submenu,
  MenuItem: Menu.MenuItem
}

const install = (Vue, options = {}) => {
  if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })

  install.installed = true
}
install.installed = false
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const ruler = {
  ...components,
  install
}

export default ruler