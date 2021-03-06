const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');

// /*---------- Public Routes ----------*/


router.post('/', isAuthenticated, tasksCtrl.create);
router.get('/', tasksCtrl.index) //<--move this to group routes and group controller


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}

module.exports = router;