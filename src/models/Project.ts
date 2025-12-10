import { Schema, model, models, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  client: string;
  location: string;
  category: string;
  description: string;
  status: string;
  images: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    client: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "Completed" },
    images: [{ type: String }],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Project = models.Project || model<IProject>("Project", ProjectSchema);
