const express = require('express');
const { likeController, orderFood,getLikeResController,unlikeController,getLikeUserController } = require('../Controller/userController');
const userRoute = express.Router()


userRoute.post('/like',likeController)
userRoute.post('/unlike',unlikeController)
userRoute.get('/get-like-res',getLikeResController)
userRoute.get('/get-like-user',getLikeUserController)
userRoute.post('/order',orderFood)


module.exports = userRoute