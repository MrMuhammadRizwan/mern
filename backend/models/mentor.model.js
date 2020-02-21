import mongoose from 'mongoose';

var MentorSchema = mongoose.Schema({
  fullName: String,
  tags: [String]
});

export default mongoose.model('Mentor', MentorSchema);