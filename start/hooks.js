'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
	const View = use('View')
	const Env = use('Env')
	const Exception = use('Exception')

	View.global('appUrl', path => {
		const APP_URL = Env.get('APP_URL')

		return path ? `${APP_URL}/${path}` : APP_URL
	})

	// Handle `InvalidSessionException`
	Exception.handle('InvalidSessionException', (error, { session, response }) => {
		session.flash({
			notification: {
				type: 'danger',
				message: 'Please login to continue.'
			}
		})

		return response.redirect('login')
	})
})