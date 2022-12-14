const express = require('express');
const { Activity, Country } = require('../db');
const { postActivity, deleteActivity } = require('./controllers')
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
        const { name, difficulty, duration, season, country } = req.body;
            
        return res.send(await postActivity(name, difficulty, duration, season, country))

    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})

activitiesRouter.delete('/:id' , async (req, res) => {
    const { id } = req.params;

    try {
        const deleteAct = await deleteActivity(id);

        return res.send(deleteAct);
        
    } catch (error) {

        return res.status(404).json({error: error.message})
    }
})


module.exports = activitiesRouter;