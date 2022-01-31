//import express to have access to the router object from node modules
const express = require('express');

//importing the mvc controller 
const friendsController = require('../controllers/friends.controller');


//***************************MAKING THE FRIENDS  ROUTER
const friendsRouter = express.Router();

//to make the machine log the IP address of the user
friendsRouter.use((req, res, next) => {
   console.log('ip address:', req.ip);
   next();
});


//ROUTER HIGHRAVHY


//'/' becomes the home root router
friendsRouter.post('/', friendsController.postFriend);
//MVC all friends endpoint
friendsRouter.get('/', friendsController.getFriends);
//matching id for each friend MVC point
friendsRouter.get('/:friendId', friendsController.getFriend);


module.exports = friendsRouter;