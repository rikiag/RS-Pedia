'use strict'

const Post = use('App/Models/Post')
const Helpers = use('Helpers')


class PostController {

	async add({ view }){
		return view.render('posts.add')
	}

	async store({ request, response, session }){

		const featuredImg = request.file('featured_img', {
			types: ['image'],
			size: '2mb'
		})

		await featuredImg.move(Helpers.publicPath('img/posts'))

		if (!featuredImg.moved()) {
			return featuredImg.error()
		}
		return 'File moved'

		const post = new Post()

		post.title        = request.input('title')
		post.place_id     = request.input('place_id')
		post.slug         = request.input('title')
		post.body         = request.input('body')
		post.featured_img = featuredImg.clientName
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
