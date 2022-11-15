import express from "express";
import { register, getUsers, login, getUser, postWish, postCart } from "../controllers/userController.js";
import createUserValidator from "../middlewares/userValidator.js";
import loginValidator from "../middlewares/loginValidator.js";

const router = express.Router();

router.post('/register', createUserValidator, register);
router.post('/login', loginValidator, login);
router.get('/allUsers', getUsers); // TEST
// router.get('/user/:id', getUser); 
router.post('/user/:id/wishlist', postWish);
router.post('/user/:id/cart', postCart);

export default router;