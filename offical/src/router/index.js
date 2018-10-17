import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const Inedx = () =>
  import('../views/Index')
const Detail = () =>
  import('../views/Detail')
const Picture = () =>
  import('../views/Picture')
const ColorType = () =>
  import('../views/ColorType')
const CarType = () =>
  import('../views/CarType')
const Quotation = () =>
  import('../views/Quotation')
const Type = () =>
  import('../views/Type')


export default new VueRouter({
  routes: [{
    path: '/index',
    name: 'Inedx',
    component: Inedx
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }, {
    path: '/picture',
    name: 'Picture',
    // redirect: '/picture',
    component: Picture
  }, {
    path: '/colorType',
    name: 'ColorType',
    component: ColorType
  }, {
    path: '/carType',
    name: 'CarType',
    component: CarType
  }, {
    path: '/quotation',
    name: 'Quotation',
    component: Quotation
  }, {
    path: '/type',
    name: 'Type',
    component: Type
  }, {
    path: '*',
    redirect: '/index'
  }]
})
