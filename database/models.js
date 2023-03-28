//Add models here, for example:

const Member = require('../api/models/member.model')
const Event = require('../api/models/event.model')
const EventCategory = require('../api/models/event_category.model')
const Product = require('../api/models/product.model')

//const User = require('./models/user')
const Equipment = require('../api/models/equipment.model')
const Professional = require('../api/models/professional.model')
const Project = require('../api/models/project.model')


const Donor = require('../api/models/donor.model')
const Volunteer = require('../api/models/volunteer.model')
const Donations = require('../api/models/donations.model')


// Event_categorie_id
/* EventCategories.hasMany(Event)
Event.belongsTo(EventCategories) */

//Donation_id
/* Product.hasMany(Donation)
Donation.belongsTo(Product) */


function addRelationsToModels() {
	try {
        //Add relations here
		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels