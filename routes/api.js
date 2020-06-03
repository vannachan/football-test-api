const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

const Player = require('../models/Player')
const Team = require('../models/Team')

router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource.'
		})
	}

	controller.get(filters)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource.'
		})
		return
	}

	controller.getById(id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// POST - create new entities:
router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource.'
		})
		return
	}

	controller.post(req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data // this will return new team/player that was created
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource.'
		})
		return
	}

	controller.put(id, req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data // this will return new team/player that was updated
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource.'
		})
		return
	}

	controller.delete(id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router