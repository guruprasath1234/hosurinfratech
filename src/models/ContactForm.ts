import { Schema, model, models, Document } from "mongoose";

export interface IContactForm extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const ContactFormSchema = new Schema<IContactForm>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export const ContactForm =
  models.ContactForm || model<IContactForm>("ContactForm", ContactFormSchema);
