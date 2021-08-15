const  router  = require("express").Router();
const userControl = require('../controllers/userControl');

router.post('/register', userControl.register)
router.get('/refresh_token', userControl.refreshToken)


module.exports = router;