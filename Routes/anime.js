const router = require("express").Router();

var anime = [{
    id:0,
    title:"The Ancient Magus' Bride",
    description:"Hatori Chise, 15 years old. Lost, without hope and without family - she sells herself to a non-human mage known as Elias Ainsworth. Hesitant, she starts a new life with him as his new apprentice.",
    mangaAuthor: "Kore Yamazaki",
    releaseDate: 2017,
    characters:["ELias Ainsworth", "Hatori Chise", "Ruth", "Cartaphilius"]
}]
var id = 0;

router.get("/getAll", (req, res, next) => {
    res.status(200).json(anime)
})

router.get("/getAnime/:id", (req, res, next) => {
    for (const a of anime) {
        if (a.id == req.params.id){
            res.status(200).json(a)
            return;
        }
    }
    next(new Error("Unknown ID!"))
})

router.get("/getAnimeByTitle/:title", (req, res, next) => {
    for (const a of anime) {
        if (a.title == req.params.title) {
            res.status(200).json(a)
            return;
        }
    }
    next(new Error("Unknown Title!"))
})

router.get("/getAnimeByMangaAuthor/:mangaAuthor", (req, res, next) => {
    for (const a of anime) {
        if (a.mangaAuthor == req.params.mangaAuthor) {
            res.status(200).json(a)
            return;
        }
    }
    next(new Error("Unknown Author!"))
})

router.get("/getAnimeByReleaseDate/:releaseDate", (req, res, next) => {
    for (const a of anime) {
        if (a.releaseDate == req.params.releaseDate) {
            res.status(200).json(a)
            return;
        }
    }
    next(new Error("Unknown ReleaseDate!"))
})

router.post("/create", (req, res, next) => {
    if (req.body.title && req.body.description && req.body.mangaAuthor && req.body.releaseDate) {
        req.body.id = ++id;
        anime.push(req.body)
        res.status(201).json(req.body)
    }else {
        next(new Error('Expected {"title":"{title}", "description":"{description}", "mangaAuthor":"{author}", "releaseDate: {year}'))
    }
})

router.delete("/deleteAnime/:id", (req, res, next) => {
    try{
        anime = anime.filter(a => (a.id != req.params.id))
        res.status(200).json(anime)
    }catch (err) {
        next(new Error ("Invalid ID"))
    }
})

router.post("/update/:id", (req, res, next) => {
    const index = anime.indexOf(anime.find(a => a.id == req.params.id))
    if(index === -1){
        next(new Error("Invalid ID"))
    }else{
        anime[index] = {...anime[index], ...req.body}
        res.status(200).json(anime[index])
    }
})

router.patch("/updateAttribute/:id", (req, res, next)=> {
    if (req.query !== {}){

        const index = movies.indexOf(anime.find(m => m.id == req.params.id))

        if(index === -1){
            next(new Error('Invaild Index'))
        }else{
            for (const key of Object.keys(req.query)) {
                anime[index][key] = req.query[key]
            }
            res.status(200).json(movies[index])
        }

    }else{
        next(new Error('Missing "/updateAttribute/:id?key=value"'))
    }
})


module.exports = router;