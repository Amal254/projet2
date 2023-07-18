const film = require("./modéles/film");
const videofilm = require("./modéles/videofilm");

const express = require("express");
const routes = express();
//use(express.json());
routes.get("/getallfilm", (req, res) => { console.log(req.body); film
    .find()
    .then((resp) => {
       
      res.send(JSON.stringify(resp));
    })
    .catch((err) => console.log(err)); })
//Post Method
routes.post("/addfilm", async (req, res) => {
console.log(req.body)
    films = new film({
        image: req.body.image,
        rating: req.body.rating,
        name: req.body.name,
        date: req.body.date,
    });

    await films.save();
    res.send(films);
});

routes.put("/putFilm",  async (req, res) => {
    await film.findOneAndUpdate(req.query, req.body)
      .then((resp) => {
        console.log(resp);
        res.send(JSON.stringify(resp));
        return resp;
      })
      .catch((err) => console.log(err));
  });

routes.delete("/deltelfilm", async (req, res) => { 
    console.log(req);    
    await film
          .findOneAndDelete(req.body)
          .then((resp) => {
            
            return resp;
          })
          .catch((err) => console.log(err)); })
 



module.exports = routes