'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')
const PasswordReset = use('App/Models/PasswordReset')
const randomString = require('random-string')
const Mail = use('Mail')
const Hash = use('Hash')

class PasswordResetController {
	showLinkRequestForm({ view }){
		return view.render('auth.password.email')
	}

	async sendResetLinkEmail({ request, session, response }){
		//validate form input
		const validation = await validate(request.only('email'), {
			email: 'required|email'
		})

		if (validation.fails()) {
			session.withErrors(validation.messages()).flashAll()

			return response.redirect('back')
		}

		try{
			//get user
			const user = await User.findBy('email', request.input('email'))

			await PasswordReset.query().where('email', user.email).delete()

			const { token } = await PasswordReset.create({
				email: user.email,
				token: randomString({length: 40})
			})

			const mailData = {
				user: user.toJSON(),
				token
			}

			await Mail.send('auth.emails.password_reset', mailData, message => {
				message
					.to(user.email)
					.from('noreplay@rspedia.com')
					.subject('Password Reset Link')
			})

			session.flash({
				notification: {
					type: 'success',
					message: 'A password reset link has been send to your email address.'
				}
			})

			return response.redirect('back')

			
		}
		catch(error){
			session.flash({
				notification: {
					type: 'danger',
					message: 'Sorry, there is no user with this email address.'
				}
			})

			return response.redirect('back')
		}
	}

	showResetForm ({ params, view }){
		return view.render('auth.password.reset', { token: params.token })
	}

	async reset({ request, session, response}){
		//validate form input
		const validation = await validate(request.all(), {
			token: 'required',
			email: 'required',
			password: 'required|confirmed'
		})

		if (validation.fails()) {
			session.withErrors(validation.messages()).flashExcept(['password', 'password_confirmation'])

			return response.redirect('back')
		}

		try{
			// Get user with provider email
			const user = await User.findBy('email', request.input('email'))

			// Check if password reset token exist for user
			const token = await PasswordReset.query()
									.where('email', user.email)
									.where('token', request.input('token'))
									.first()

			if (!token) {
				session.flash({
					notification: {
						type: 'danger',
						message: 'Password reset token does not exist'
					}
				})

				return response.redirect('back')
			}

			user.password = await Hash.make(request.input('password'))
			await user.save()

			// Delete password reset token
			await PasswordReset.query().where('email', user.email).delete()

			// display success message
			session.flash({
				notification: {
					type: 'success',
					message: 'Your password has been reset!'
				}
			})

			return response.redirect('/login')

		}
		catch(error){
			session.flash({
				notification: {
					type: 'danger',
					message: 'Sorry, there is no user with this email address.'
				}
			})

			return response.redirect('back')
		}
	}
}

module.exports = PasswordResetController
