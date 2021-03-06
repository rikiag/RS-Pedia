'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', 'HomeController.index').as('home')
Route.get('detail/:placeId', 'HomeController.detail')

Route.get('dashboard', 'DashboardController.index').as('dashboard').middleware(['auth'])

Route.get('register', 'Auth/RegisterController.showRegisterForm').middleware(['authenticated'])
Route.post('register', 'Auth/RegisterController.register').as('register')
Route.get('register/confirm/:token', 'Auth/RegisterController.confirmEmail')
Route.get('login', 'Auth/LoginController.showLoginForm').middleware(['authenticated'])
Route.post('login', 'Auth/LoginController.login').as('login')
Route.get('logout', 'Auth/AuthenticatedController.logout')
Route.get('password/reset', 'Auth/PasswordResetController.showLinkRequestForm')
Route.post('password/email', 'Auth/PasswordResetController.sendResetLinkEmail')
Route.get('password/reset/:token', 'Auth/PasswordResetController.showResetForm')
Route.post('password/reset', 'Auth/PasswordResetController.reset')

Route.get('post/add', 'PostController.add').middleware(['auth'])
Route.post('post/add', 'PostController.store').as('addPost').middleware(['auth'])
Route.get('post/edit/:id', 'PostController.edit').middleware(['auth'])
Route.post('post/edit', 'PostController.update').as('updatePost').middleware(['auth'])
Route.get('post/view/:slug', 'PostController.view')

Route.delete('posts/:id', 'PostController.delete').middleware(['auth'])

Route.get('forum', 'PostController.index').as('forum')

Route.get('setting', 'DashboardController.setting').as('setting').middleware(['auth'])
Route.post('setting', 'DashboardController.updateProfile').as('updateProfile').middleware(['auth'])

Route.get('about', 'HomeController.about')
