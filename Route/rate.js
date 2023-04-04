const express = require('express');
const { likeController,getLikeResController,unlikeController,getLikeUserController } = require('../Controller/userController');
const rateRoute = express.Router()


userRoute.post('/create-comment',createComment)
userRoute.post('/delete-comment',deleteComment)
userRoute.get('/get-by-user',getCommentByUser)
userRoute.get('/get-by-get',getCommentByRes)


module.exports = rateRoute