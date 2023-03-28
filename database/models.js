//Add models here, for example:
//const User = require('./models/user')
const Equipment = require('../api/models/equipment.model')
const Professional = require('../api/models/professional.model')
const Project = require('../api/models/project.model')



function addRelationsToModels() {
	try {
        //Add relations here
		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels