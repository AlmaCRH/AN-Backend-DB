const Project = require('../models/project.model')

async function getAllProjects(req, res) {
    try {
        const projects = await Project.findAll({ paranoid: false })
        if (projects) {
            return res.status(200).json(projects)
        } else {
            return res.status(404).send('No projects found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneProject(req, res) {
    try {
        const project = await Project.findByPk(req.params.id)
        if (project) {
            return res.status(200).json(project)
        } else {
            return res.status(404).send('Project not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createProject(req, res) {
    try {
        const project = await Project.create({
            firstName: req.body.firstName,
        })
        return res.status(200).json({ message: 'Project created', project: project })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateProject(req, res) {
    try {
        const [projectExist, project] = await Project.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (projectExist !== 0) {
            return res.status(200).json({ message: 'Project updated', project: project })
        } else {
            return res.status(404).send('Project not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProject(req, res) {
    try {
        const project = await Project.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (project) {
            return res.status(200).json('Project deleted')
        } else {
            return res.status(404).send('Project not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject
}