import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './app.riot'
import "ress"
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()

// mount the root tag
component(App)(document.getElementById('root'))
