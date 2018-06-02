'use strict'

const { validate } = use('Validator')
const Post = use('App/Models/Post')

class PostController {

	async add({ view }){
		return view.render('posts.add')
	}

	async store({ request, response, session }){
		const post = new Post()

		post.title        = request.input('title')
		post.place_id     = request.input('place_id')
		post.slug         = request.input('title')
		post.body         = request.input('body')
		post.featured_img = request.input('featured_img')
		post.user_id      = request.input('id')

		await post.save()

		session.flash({
			notification: {
				type: 'success',
				message: 'Post Added!'
			}
		})

		return response.redirect('/dashboard')
	}
}

module.exports = PostController
