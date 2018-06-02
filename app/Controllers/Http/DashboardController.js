'use strict'

const Post = use('App/Models/Post')
const Database = use('Database')

class DashboardController {
	async index({view, auth}){
		const posts = await Database.from('posts').where('user_id', auth.user.id)

		return view.render('dashboard.index', {
			posts: posts
		})
	}
}

module.exports = DashboardController
