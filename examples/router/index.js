import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const icon = resolve => require(['@/doc/icon.md'], resolve)
const font = resolve => require(['@/doc/font.md'], resolve)
const color = resolve => require(['@/doc/color.md'], resolve)
const button = resolve => require(['@/doc/button.md'], resolve)
const slider = resolve => require(['@/doc/slider.md'], resolve)
const notification = resolve => require(['@/doc/notification.md'], resolve)
export default new Router({
  routes: [
    {
      path: '/color',
      component: color
    },
    {
      path: '/icon',
      component: icon
    },
    {
      path: '/font',
      component: font
    },
    {
      path: '/button',
      component: button
    },
    {
      path: '/slider',
      component: slider
    },
    {
      path: '/notification',
      component: notification
    }
  ]
})
