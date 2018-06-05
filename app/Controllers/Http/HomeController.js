'use strict'

const Env = use('Env')

class HomeController {
	index({view}){
		const mapsApi = Env.get('MAPS_API')

		return view.render('home.index', {mapsApi : mapsApi})
	}

	detail ({ params, view }){
		const mapsApi = Env.get('MAPS_API')
		
		return view.render('home.place_detail', {
			placeId: params.placeId,
			mapsApi : mapsApi
		})
	}

	about({view}){
		return view.render('home.about')
	}
}

module.exports = HomeController
