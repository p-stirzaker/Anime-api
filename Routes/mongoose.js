const router = require("express").Router();
const {Schema, model} = require("mongoose");

const characterSchema = new Schema ( {
    name:{type:String, required:true},
    playedBy:{type:String, required:false}
})

const animeSchema = new Schema( {
    title:{type:String, required:true},
    description:{type:String, required:false},
    mangaAuthor:{type:String, require:true},
    releaseDate:{type:Number, required:true},
    characters:[characterSchema]
})

const animeModel = model("anime", animeSchema);

router.get("/getAll", (req, res, next) => {
    animeModel.find({}).then(anime => {
        res.status(200).json(anime)
    }).catch(next)
})

router.get("/getAnimeByTitle/:title", (req, res, next) =>{
    animeModel.find({"title": req.params.title}).then(anime =>{
        res.status(200).json(anime)
    }).catch(next)
})

router.get("/getCharactersById/:id", (req, res, next) => {
    animeModel.find({"characters._id": req.params.id}).then(anime => {
        res.status(200).json(anime)
    }).catch(next)
})

router.post("/create", (req, res, next) => {
    animeModel.create(req.body).then(anime => {
        res.status(201).json(anime)
    }).catch(next)
})

router.post("/update/:id", (req, res, next) => {
    animeModel.findByIdAndUpdate({"._id":req.params.id}, req.body).then((Old) => {
        animeModel.findById({"_id":req.params.id}).then((New) => {
            res.status(200).json({Old, New})
        })
    }).catch(next)
})

router.delete("/deleteAnime/:id", (req, res, next) => {
    animeModel.delete({"_id":req.params.id}).then(r => {
        res.status(200).json(r)
    }).catch(next)
})


module.exports = router;