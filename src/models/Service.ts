import { Schema, model, models, Document } from "mongoose";

export interface IService extends Document {
  title: string;
  description: string;
  category: string;
  highlights?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    highlights: [{ type: String }]
  },
  { timestamps: true }
);

export const Service = models.Service || model<IService>("Service", ServiceSchema);
