// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const Player = require('../models/Player')
const Team = require('../models/Team')

// static, we will move to db later
// const players = [
// 	{firstName:"eli", lastname:"manning", position:"qb", age:37, team:"nyg"},
// 	{firstName:"tom", lastname:"brady", position:"qb", age:41, team:"nep"},
// 	{firstName:"jj", lastname:"watt", position:"de", age:28, team:"hou"}
// ]
// const teams = [
// 	{name:"giants", city:"new york", conference:"nfc"},
// 	{name:"patriots", city:"new england", conference:"afc"},
// 	{name:"texans", city:"houston", conference:"afc"}
// ]

// const db = {
// 	team: teams,
// 	player: players
// }

// Team request
router.get('/team', (req, res) => {
	Team.find(null)
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

// Player request
router.get('/player', (req, res) => {
	Player.find(null)
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

// Just pick one
// router.get('/:resource', (req, res) => {
// 	const resource = req.params.resource

// 	const data = db[resource]
// 	if (data == null) {
// 		res.json({
// 			confirmation: 'fail',
// 			data: 'Invalid request. Resource undefined.'
// 		})
// 		return
// 	}
	
// 	res.json({
// 		confirmation: 'success',
// 		data: data
// 	})

	// if (resource == 'team') {
	// 	res.json({
	// 		confirmation: 'success',
	// 		data: db.team
	// 	})
	// 	return
	// } else if (resource == 'player') {
	// 	res.json({
	// 		confirmation: 'success',
	// 		data: db.player
	// 	})
	// 	return
	// }
})

// router.get('/player', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		data: players
// 	})
// })

// router.get('/team', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		data: teams
// 	})
// })

module.exports = router