'use strict'

const Env = use('Env')

class HomeController {
	index({view}){
		const mapsApi = Env.get('MAPS_API')

		return view.render('home.index', mapsApi)
	}

	detail ({ params, view }){
		return view.render('home.place_detail', { placeId: params.placeId })
	}
}

module.exports = HomeController
