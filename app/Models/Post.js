'use strict'

const Model = use('Model')

class Post extends Model {
	static boot () {
		super.boot()

		this.addTrait('@provider:Lucid/Slugify', {
			fields: {
				slug: 'title'
			},
			strategy: 'dbIncrement'
		})
	}
}

module.exports = Post
