import Vue from 'vue'
import VueRouter from 'vue-router'
import GeneralView from '../views/GeneralView.vue'
import CSSView from '../views/CSSView.vue'
import mycomponent from '../views/Component.vue'
import FrameWork from '../views/FrameWork.vue'
import CompatibleView from '../views/CompatibleView.vue'
import PageReference from '../views/PageReference.vue'
import BackEnd from '../views/BackEnd.vue'
import AgentView from '../views/AgentView.vue'
import ServeView from '../views/ServeView.vue'
import BlueArchieve from '../views/BlueArchieve.vue'
import Bilibili from '../views/Bilibili.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'general',
    component: GeneralView
  },
  {
    path: '/css',
    name: 'css',
    component: CSSView
  },
  {
    path: '/component',
    name: 'component',
    component: mycomponent
  },
  {
    path: '/FrameWork',
    name: 'FrameWork',
    component: FrameWork
  }, {
    path: '/CompatibleView',
    name: 'CompatibleView',
    component: CompatibleView

  }, {
    path: '/PageReference',
    name: 'PageReference',
    component: PageReference
  },
  {
    path: '/BlueArchieve',
    name: 'BlueArchieve',
    component: BlueArchieve
  },
  {
    path: '/bilibili',
    name: 'bilibili',
    component: Bilibili
  },
  {
    path: '/BackEnd',
    name: 'BackEnd',
    component: BackEnd
  },
  {
    path: '/AgentView',
    name: 'AgentView',
    component: AgentView
  },
  {
    path: '/ServeView',
    name: 'ServeView',
    component: ServeView
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
