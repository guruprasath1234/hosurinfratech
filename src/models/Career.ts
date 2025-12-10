import { Schema, model, models, Document } from "mongoose";

export interface ICareer extends Document {
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  resumePath?: string;
  applicantName?: string;
  applicantEmail?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CareerSchema = new Schema<ICareer>(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    department: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    requirements: [{ type: String }],
    resumePath: String,
    applicantName: String,
    applicantEmail: String
  },
  { timestamps: true }
);

export const Career = models.Career || model<ICareer>("Career", CareerSchema);
