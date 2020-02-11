import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Dashboard from '@/components/dashboard'
import Add from '@/components/Add'
import Posts from '@/components/Posts'
import Users from '@/components/Users'
import Courses from '@/components/Courses'
import EditCourse from '@/components/EditCourse'
import CourseByProvider from '@/components/CourseByProvider'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index.html',
      component: Login,
      alias: '/'
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/courses/edit/:id',
      name: 'editCourse',
      component: EditCourse
    },
    {
      path: '/courses/provider/:providername',
      name: 'courseByProvider',
      component: CourseByProvider
    }
  ]
})
