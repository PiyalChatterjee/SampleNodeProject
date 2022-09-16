const mongoose = require("mongoose");

const { Schema } = mongoose;

const detailsModel = new Schema({
  name: { type: String, required: true },
  empId: { type: String, required: true },
  intId: { type: Number, required: true },
});

module.exports = mongoose.model("Detail", detailsModel);
