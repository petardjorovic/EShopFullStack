const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitorSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: [true, "Email is required for DB"] },
    password: { type: String, required: [true, "Password is required for DB"] },
  },
  {
    timestamps: true,
  }
);

const VisitorModel = mongoose.model("Visitor", VisitorSchema);

module.exports = VisitorModel;
