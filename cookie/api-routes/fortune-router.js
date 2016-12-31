const router = require ("express").Router();
const Fortune = require('../models/fortune-model');
const bodyParser = require('body-parser');

// {order:
// 			[Sequelize.fn( 'RAND' ),]
// 		}

function getRandomFortune(req, res){
	Fortune
		.findone()
		.then(function(data){
			res.send(data)
		})
}

function addFortune(req, res){
	Fortune

		.create({

			prediction: req.body.prediction
		})
		.then(
			function(data){
			res.send(data)
		})
		.catch(function(err){
			console.log(err)
		})
}

router.route('/')
	.get(getRandomFortune)
	.post(addFortune)











module.exports = router;