//process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()
const { checkConnection, syncModels } = require('./database/index')
const addRelationsToModels = require('./database/models')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncPostgreSQL() {
	await checkConnection()
	await addRelationsToModels()
	await syncModels('alter')
}

function initializeAndListenWithExpress() {
	const app = express()
		.use(cors())
		.use(morgan('dev'))
		.use(express.json())
		.use('/api', require('./api/routes'))

		.listen(process.env.PORT, () => {
			console.log(`> Listening on port: ${process.env.PORT}`)
		})
}

async function startAPI() {
	await checkAndSyncPostgreSQL()
	initializeAndListenWithExpress()
}

startAPI()

//this is a test