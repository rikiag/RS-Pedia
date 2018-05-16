'use strict'

const Env = use('Env')

class HomeController {
	index({view}){
		const mapsApi = Env.get('MAPS_API')

		return view.render('home.index', mapsApi)
	}
}

module.exports = HomeController
