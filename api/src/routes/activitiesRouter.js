const express = require('express');

const activitiesRouter = express.Router();

//.post 
activitiesRouter.get('/', (req, res) => {
    res.send('activities route');
})


module.exports = activitiesRouter;