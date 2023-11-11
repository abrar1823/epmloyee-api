const mongoose = require("mongoose");

const empmodel = mongoose.model("emps", {
  empid: { type: Number },
  fname: { type: String },
  lname: { type: String },
  mobile: { type: Number },
  email: { type: String },
  city: { type: String },
  IsActive: { type: Boolean },
});

module.exports = empmodel;
