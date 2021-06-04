
const express  = require("express")
const router   = express.Router()
const Movie   = require('../models/movie')


router.get('/:id',  async(req, res) => {
	try{
           const movies =  await Movie.findById(req.params.id)
           res.json(movies)
    }catch(err){
        res.send('Error' + err)

    }
})

router.post('/', async(req, res) => {
    const movie = new movie({
        name: req.body.name,
        image: req.body.image,
        summary: req.body.summary

    })

    try {
        const a1 = await movie.save()
        res.json(a1)
    } catch (err) {
        res.send('Eror')
        
    }
})


module.exports = router 