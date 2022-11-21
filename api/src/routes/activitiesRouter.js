const express = require('express');
const { Activity, Country } = require('../db');
const { postActivity } = require('./controllers')
const activitiesRouter = express.Router();

//.post 
activitiesRouter.get('/', async (req, res) => {
    try {
        const allActivities = await Activity.findAll(
            {include: {
                model: Country,
                attributes: ["name"],
                through: { attributes: [] }
              }}
        )
        return res.send(allActivities)

    } catch (error) {
        return res.status(404).json({error : error.message})
    }
})


activitiesRouter.post('/', async (req, res) => {

    try {
        const { id, name, difficulty, duration, season } = req.body;
        
        // if(!id || !name || !difficulty || !duration ){
        //     return res.status(404).json({error: 'Missing information'})
        // }

        // else {
            
            return res.send(await postActivity(id, name, difficulty, duration, season))
        // }

    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})


module.exports = activitiesRouter;