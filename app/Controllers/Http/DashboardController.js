'use strict'

const Post = use('App/Models/Post')
const Database = use('Database')
const Env = use('Env')

class DashboardController {
	async index({view, auth}){
		const mapsApi = Env.get('MAPS_API')
		const posts = await Database.from('posts').where('user_id', auth.user.id)
		console.log(posts)

		return view.render('dashboard.index', {
			posts: posts,
			mapsApi : mapsApi
		})
	}
}

module.exports = DashboardController
