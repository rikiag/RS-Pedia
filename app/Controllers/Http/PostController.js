'use strict'

const Post = use('App/Models/Post')

class PostController {

	async add({ view }){
		return view.render('posts.add')
	}

	async store({ view, params }){
		return view.render('dashboard.index')
	}
}

module.exports = PostController
