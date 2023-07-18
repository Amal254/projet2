let mongoose = require("mongoose")

const filmvideo = new mongoose.Schema({
    video: { type: String, required: true },
});

const videoModel = mongoose.model("filmvideo", filmvideo);
module.exports = videoModel;

// Create Many videos with model.create()

const arrayOffilm = [

      {
        Video:"https://www.youtube.com/embed/ip267-es294",
      },

      {
        Video:"https://www.youtube.com/embed/lAbMtFUHPfc",
      },

      {
        Video:"https://www.youtube.com/embed/f-OL58H7IOE",
      },

      {
        Video:"https://www.youtube.com/embed/1o_MjaF_E2o",
      },

      {
        Video:"https://www.youtube.com/embed/lj9SyW3LqnU",
      },


]  