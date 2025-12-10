import { Schema, model, models, Document } from "mongoose";

export interface IAdminUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export const AdminUser =
  models.AdminUser || model<IAdminUser>("AdminUser", AdminUserSchema);
