'use strict'

const Post = use('App/Models/Post')

class PostController {

	async add({ view }){
		return view.render('posts.add')
	}
}

module.exports = PostController
