//use express
let express = require ('express')

//instantiate an express router to parse and direct url requests
let router = express.Router()

//add model ref
const Artist = require('../models/artist')

router.get('/',(req,res) => {
    //use Artist model to fetch all documents from artists collection in mongodb
    Artist.find((err,artists) =>{
        if(err){
            console.log(err)
            res.end(err)
        }
        else{
            console.log(artists)
            res.render('artists/index',{
                artists:artists
            })
        }
    })

 //   res.render('artists/index')
})

// GET: artists/create => show new artist form
router.get('/create',(req,res)=>{
    res.render('artists/create',{
        title:'Add a new Artist'
    })
})

// POST: artists/create => process form submission & save new Artist document
router.post('/create',(req,res)=>{
  //use mongoose model to create a new Artist document
    Artist.create({
        name: req.body.name
    },(err, newArtist)=>{
        if(err){
            console.log(err)
            res.end(err)
        }
        else{//save successful > update artists list view
            res.redirect('/artists')
        }
    })
})

//make public
module.exports = router