const router = require("express").Router();
const dbConn = require("../database")

router.post('/one', (req, res) => {

    let error = "";
    req.body.title.Search.map(data => {
        dbConn.query(`INSERT INTO public.publications ("Title", "Type", "Year", "imdbID") VALUES ('${data.Title.replace(/'/gm, `"`)}', '${data.Type}', '${data.Year}', '${data.imdbID}')`, (err, res) => {
            if (!err) {
                console.log("DETAILS SAVED");
                dbConn.query(`INSERT INTO public.posters ("Name", "imdbID") VALUES ( '${data.Poster}', '${data.imdbID}')`, (err, res) => {
                    if (!err) {
                        console.log("POSTERS SAVED");
                    }else{
                        let error = "";
                    }})
            }else{
                let error = "";
            }
        })

    })
    if (error) {
        return res.send(req.body.title.Search)
    }
    return res.send(req.body.title.Search)
})

router.post('/two', (req, res) => {

    let error = "";
    req.body.title.Search.map(data => {
        dbConn.query(`INSERT INTO public.publications ("Title", "Type", "Year", "imdbID") VALUES ('${data.Title.replace(/'/gm, `"`)}', '${data.Type}', '${data.Year}', '${data.imdbID}')`, (err, res) => {
            if (!err) {
                console.log("DETAILS SAVED");
                dbConn.query(`INSERT INTO public.posters ("Name", "imdbID") VALUES ( '${data.Poster}', '${data.imdbID}')`, (err, res) => {
                    if (!err) {
                        console.log("POSTERS SAVED");
                    }else{
                        let error = "";
                    }})
            }else{
                let error = "";
            }
        })

    })
    if (error) {
        return res.send(req.body.title.Search)
    }
    return res.send(req.body.title.Search)
})

router.post('/three', (req, res) => {

    let error = "";
    req.body.title.Search.map(data => {
        dbConn.query(`INSERT INTO public.publications ("Title", "Type", "Year", "imdbID") VALUES ('${data.Title.replace(/'/gm, `"`)}', '${data.Type}', '${data.Year}', '${data.imdbID}')`, (err, res) => {
            if (!err) {
                console.log("DETAILS SAVED");
                dbConn.query(`INSERT INTO public.posters ("Name", "imdbID") VALUES ( '${data.Poster}', '${data.imdbID}')`, (err, res) => {
                    if (!err) {
                        console.log("POSTERS SAVED");
                    }else{
                        let error = "";
                    }})
            }else{
                let error = "";
            }
        })

    })
    if (error) {
        return res.send(req.body.title.Search)
    }
    return res.send(req.body.title.Search)
})


module.exports = router;