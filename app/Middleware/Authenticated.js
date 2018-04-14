'use strict'

class Authenticated {
  async handle ({ request, auth, response }, next) {
    // call next to advance the request
    try{
    	await auth.check()

    	return response.route('dashboard')
    }
    catch (error){
    	await next()
    }
  }
}

module.exports = Authenticated
