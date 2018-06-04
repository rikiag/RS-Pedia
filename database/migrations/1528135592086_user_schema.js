'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('photo')
      table.text('desc')
      table.string('fb')
      table.string('tw')
      table.string('ig')
      table.string('ii')

    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserSchema
