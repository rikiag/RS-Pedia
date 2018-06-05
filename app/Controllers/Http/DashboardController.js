'use strict'

const Post = use('App/Models/Post')
const User = use('App/Models/User')
const Database = use('Database')
const Helpers = use('Helpers')
const Env = use('Env')

class DashboardController {
	async index({view, auth}){
		const mapsApi = Env.get('MAPS_API')
		const posts = await Database.from('posts').where('user_id', auth.user.id)

		return view.render('dashboard.index', {
			posts: posts,
			mapsApi : mapsApi
		})
	}

	async setting({view, auth}){
		const user = await User.find(auth.user.id)
		return view.render('dashboard.setting', {
			user: user
		})
	}

	async updateProfile({ request, response, session, auth }){
		const userImg = request.file('photo', {
			types: ['image'],
			size: '2mb'
		})

		console.log(Helpers.publicPath());

		await userImg.move(Helpers.publicPath('img/users'))

		const user = await User.find(auth.user.id)

		user.username = request.input('username')
		user.email    = request.input('email')
		user.desc     = request.input('title')
		user.fb       = request.input('fb')
		user.tw       = request.input('tw')
		user.ig       = request.input('ig')
		user.in       = request.input('in')
		user.photo    = userImg.fileName

		await user.save()

		session.flash({
			notification: {
				type: 'success',
				message: 'Profile Updated!'
			}
		})

		return response.redirect('/setting')
	}
}

module.exports = DashboardController
