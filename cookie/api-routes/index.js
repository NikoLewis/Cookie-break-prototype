const router = require ("express").Router()


// I will eventually need 2 api routes: 1. get a random fortune using GET, add a forune to the database POST and 2. to GET all fortunes currently in database

router.use('/fortune', require('./fortune-router'))





module.exports = router;