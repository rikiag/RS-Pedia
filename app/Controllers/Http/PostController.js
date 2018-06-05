'use strict'

const Post = use('App/Models/Post')
const User = use('App/Models/User')
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

	async view ({ params, view }){
		const post = await Post.findBy('slug', params.slug)
		const author = await User.find(post.user_id)

		return view.render('posts.view', {
			post:post.toJSON(),
			author: author.toJSON()
		})
	}

	async edit({ view, params }){
		const post = await Post.find(params.id)

		return view.render('posts.edit', {
			post: post
		})
	}

	async update({ request, response, session }){
		const featuredImg = request.file('featured_img', {
			types: ['image'],
			size: '2mb'
		})

		await featuredImg.move(Helpers.publicPath('img/posts'), {
			name: request.input('title')+'.'+featuredImg.subtype
		})

		const post = await Post.find(request.input('id'))

		post.title        = request.input('title')
		post.place_id     = request.input('place_id')
		post.body         = request.input('body')
		post.featured_img = featuredImg.fileName
		post.user_id      = request.input('u_id')

		await post.save()

		session.flash({
			notification: {
				type: 'success',
				message: 'Post Updated!'
			}
		})

		return response.redirect('/dashboard')
	}
}

module.exports = PostController
