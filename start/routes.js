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

Route.on('/').render('home/index')

Route.get('register', 'Auth/RegisterController.showRegisterForm')
Route.post('register', 'Auth/RegisterController.register').as('register')
Route.get('register/confirm/:token', 'Auth/RegisterController.confirmEmail')

