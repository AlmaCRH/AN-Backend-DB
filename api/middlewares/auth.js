const jwt = require('jsonwebtoken')
const Member = require('../models/member.model')

const checkAuth = (req, res, next) => {

    const token = req.headers.token

    jwt.verify(token,process.env.SECRET , (err , payload ) => {
        if(err) {
            return res.status(400).send('Invalid token')
        }
            const member = Member.findOne({where: 
            {
                email: payload.email
            }})
            
            res.locals.member = member
            if(!member) {
                return res.status(400).send('Invalid token')
            }
            next()
        })
    }


 const checkAdmin = (req, res, next) => {
    if(res.locals.member.role === 'admin') {
        next()
    } else {
        return res.status(401).send('This is just for admins!')
    }
}

const checkDonor = (req, res, next) => {
    if (res.locals.member.role === 'donor' || res.locals.member.role === 'admin') {
        next()
    } else {
        return res.status(401).send('This is just for Donors!')
    }
}


const checkVolunteer = (req, res, next) => {
    if (res.locals.member.role === 'volunteer' || res.locals.member.role === 'admin') {
        next()
    } else {
        return res.status(401).send('This is just for Volunteers!')
    }
}


const checkVolunteerDonor = (req, res, next) => {
    if (res.locals.member.role === 'volunteer_donor' || res.locals.member.role === 'admin') {
        next()
    } else {
        return res.status(401).send('You need to be a volunteer and a donor for access this field')
    }
}
 


module.exports = {
    checkAuth,
    checkAdmin,
    checkVolunteerDonor,
    checkVolunteer,
    checkDonor,
}