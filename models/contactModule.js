const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const contactSchema = moongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the email address"],
    },
    phone: {
      type: String,
      required: [true, "please add the phonr number"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("contact", contactSchema);
