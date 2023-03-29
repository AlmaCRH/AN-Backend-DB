const Donations = require('../models/donations.model')

async function getAllDonations(req, res) {
    try {
        const donation = await Donations.findAll({ paranoid: false })
        if (donation) {
            return res.status(200).json(donation)
        } else {
            return res.status(404).send('No Donations found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneDonation(req, res) {
    try {
        const donation = await Donations.findByPk(req.params.id)
        if (donation) {
            return res.status(200).json(donation)
        } else {
            return res.status(404).send('Donation not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createDonation(req, res) {
    try {
        const donation = await Donations.create(req.body)
        return res.status(200).json({ message: 'Donation created', donation: donation })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDonation(req, res) {
    try {
        const [donationExist, donation] = await Donations.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (donationExist !== 0) {
            return res.status(200).json({ message: 'Donation updated', donation })
        } else {
            return res.status(404).send('Donation not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteDonation(req, res) {
    try {
        const donation = await Donations.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (donation) {
            return res.status(200).json('Donation deleted')
        } else {
            return res.status(404).send('Donation not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllDonations,
    deleteDonation,
    updateDonation,
    createDonation,
    getOneDonation
}