//Add models here, for example:
const Member = require('../api/models/member.model')
const Event = require('../api/models/event.model')
const EventCategory = require('../api/models/event_category.model')
const Product = require('../api/models/product.model')




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