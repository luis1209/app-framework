// Import Vue
var Vue = require('vue')

// Import F7
var Framework7 = require('framework7')

// Import F7 Vue Plugin
var Framework7Vue = require('framework7-vue')

// Import F7 iOS Theme Styles
var Framework7Theme = require('framework7/dist/css/framework7.ios.min.css')
var Framework7ThemeColors = require('framework7/dist/css/framework7.ios.colors.min.css')
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Load routes
var pkg = require('./package.json')
if (pkg.appRoot === '/../../') pkg.appRoot = './../'
var app = require('.' + pkg.appRoot + 'package.json')
var Routes = []
for (var page in app.routes) {
  Routes.push({path: page, component: require('.' + pkg.appRoot + 'pages/' + app.routes[page] + '.vue')})
}

// Import App Component
var App = require('.' + pkg.appRoot + 'app.vue')

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
