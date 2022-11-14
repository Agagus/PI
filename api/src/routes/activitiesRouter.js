const express = require('express');
const { Activity } = require('../db');
const { postActivity } = require('./controllers')
const activitiesRouter = express.Router();

//.post 
activitiesRouter.post('/', async (req, res) => {

    // try {
        const { id, name, difficulty, duration, season } = req.body;
        
        if(!id || !name || !difficulty || !duration ){
            return res.status(404).json({error: 'Missing information'})
        }

        else {
            // const addAct = await newActivity.addActivity(findCountry)
            return res.send(await postActivity(id, name, difficulty, duration, season))
        }

    // } catch (error) {
    //     return res.status(404).json({error: 'no es posible crear la actividad'})
    // }
})


module.exports = activitiesRouter;