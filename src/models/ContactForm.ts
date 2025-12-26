import { Schema, model, models, Document } from "mongoose";

export interface IContactForm extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactFormSchema = new Schema<IContactForm>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // ✅ createdAt & updatedAt auto
  }
);

export default models.ContactForm ||
  model<IContactForm>("ContactForm", ContactFormSchema);
