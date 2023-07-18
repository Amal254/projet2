let mongoose = require("mongoose")

const film = new mongoose.Schema({
    image: { type: String, required: true },
    rating: { type: Number },
    name: { type: String, required: true },
    date: { type: String },
});

const filmModel = mongoose.model("film", film);
module.exports = filmModel;

// Create Many film with model.create()

const arrayOffilm = [

      {
        image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
        rating: 5,
        name: "Star Wars: The Rise Of Skywalker",
        date: "December 2019",
      },

      {
        image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        rating: 4,
        name: "Avengers: Infinity War",
        date: "April 2018",
      },

      {
        image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
        rating: 4,
        name: "Frozen II",
        date: "November 2019",
      },

      {
        image:
          "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
        rating: 3,
        name: "Fantastic Beasts and Where to Find Them",
        date: "November 2016",
      },

      {
        image: "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_.jpg",
        rating: 2,
        name: "Cat In The Hat",
        date: "November 2003",
      },


]  