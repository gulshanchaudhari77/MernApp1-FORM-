const express = require("express");
const router = express.Router();
// const { createUser } = require("../controllers/createUser");
// const { getUser } = require("../controllers/getUser");
// router.post("/createUser", createUser);
// router.get("/getallUsers", getUser);

// const{signup,login}=require("../controllers/AuthControllers");
// const{signupValidation,loginValidation}=require ("../middlewares/AuthValidation")

// router.route('/login',loginValidation,login);
// router.route('/signup',signupValidation,signup);

// module.exports = router;

const { signup, login } = require('../controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;
