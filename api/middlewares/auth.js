const jwt = require('jsonwebtoken')
const Member = require('../models/member.model')

const checkAuth = (req, res, next) => {

    const token = req.headers.token

    jwt.verify(token,process.env.SECRET , async (err , payload ) => {
        if(err) {
            return res.status(400).send('Token not found')
        }
            const member = await Member.findOne({where: 
            {
                email: payload.email
            }})
            res.locals.member = member
        if (!member) {
                return res.status(400).send('Invalid token')
            }
            next()
        })
}


 const checkAdmin = (req, res, next) => {
    if(res.locals.member.role === 'admin') {
        next()
    } else {
        res.json('This is just for admins!')
    }
}

const checkDonor = (req, res, next) => {
    if (res.locals.member.role === 'donor' || res.locals.member.role === 'admin') {
        next()
    } else {
        res.status(401).send('This is just for Donors!')
    }
}


const checkVolunteer = (req, res, next) => {
    if (res.locals.member.role === 'volunteer' || res.locals.member.role === 'admin') {
        res.locals.member
            //res.json(res.locals.member)
        next()
        }
     else {
        //return res.status(401).send('This is just for Volunteers!')
        next()
    }
}


const checkVolunteerDonor = (req, res, next) => {
    if (res.locals.member.role === 'volunteer_donor' || res.locals.member.role === 'admin') {
        next()
    } else {
        //return res.status(401).send('You need to be a volunteer and a donor for access this field')
        next()
    }
}

const checkVolunteerDonorAdmin = (req, res, next) => {
    if (res.locals.member.role === 'volunteer' || res.locals.member.role === 'admin' || res.locals.member.role === 'donor' || res.locals.member.role === 'volunteer_donor') {
        next()
    } else {
        //return res.status(401).send('You need to be a volunteer and a donor for access this field')
        next()
    }
}

// const checkRole = (req, res, next) => {
//     switch (res.locals.member.role) {
//         case 'admin':checkRole is not defined

//             next()
//             break
//         case 'donor': 
//             next()
//             break
//         case 'volunteer':
//             checkVolunteer()
//             next()
//             break
//         case 'volunteer_donor':
//             next()
//             break
//         default:
//             res.send('Cannot Pass!!!!')
//     }
// }
 


module.exports = {
    checkAuth,
    checkAdmin,
    checkVolunteerDonor,
    checkVolunteer,
    checkDonor,
    checkVolunteerDonorAdmin
}