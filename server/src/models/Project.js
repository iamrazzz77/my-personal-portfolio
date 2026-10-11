import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  summary: { type: String, required: true },
  featured: { type: Boolean, default: false },
  image: { type: String },
  tags: [{ type: String }],
  githubUrl: { type: String },
  liveUrl: { type: String },
  details: {
    role: String,
    period: String,
    highlights: [String]
  }
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
