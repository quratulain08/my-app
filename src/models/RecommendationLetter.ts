import mongoose, { Schema, model, models, Document } from 'mongoose';

// Define the RecommendationLetter interface
interface IRecommendationLetter extends Document {
  studentId: mongoose.Types.ObjectId; // Use ObjectId for student reference
  letter: string;
  date: Date;
}

// Define the RecommendationLetter schema
const RecommendationLetterSchema = new Schema<IRecommendationLetter>({
  studentId: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // Use Schema.Types.ObjectId
  letter: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Check if the model exists to avoid overwrite issues during development
const RecommendationLetter = models.RecommendationLetter || model<IRecommendationLetter>('RecommendationLetter', RecommendationLetterSchema);

export default RecommendationLetter;
