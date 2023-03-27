//Add models here, for example:
//const User = require('./models/user')
const Member = require('../api/models/member.model')



function addRelationsToModels() {
	try {
        //Add relations here
		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels