import mongoose, { Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  phone: string;
}

const contactScema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const Contact = mongoose.model("Contact", contactScema);

export default Contact;
