'use strict'

const Post = use('App/Models/Post')
const Helpers = use('Helpers')


class PostController {

	async index({ view }){
		const posts = await Post.all()

		console.log(posts)

		return view.render('posts.index', {
			posts: posts.toJSON()
		})
	}

	async add({ view }){
		return view.render('posts.add')
	}

	async store({ request, response, session }){

		const featuredImg = request.file('featured_img', {
			types: ['image'],
			size: '2mb'
		})

		await featuredImg.move(Helpers.publicPath('img/posts'), {
			name: request.input('title')+'.'+featuredImg.subtype
		})

		const post = new Post()

		post.title        = request.input('title')
		post.place_id     = request.input('place_id')
		post.body         = request.input('body')
		post.featured_img = featuredImg.fileName
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
