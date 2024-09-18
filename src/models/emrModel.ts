import mongoose from 'mongoose';

const EMRSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  diagnosis: { type: String },
  treatment: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const EMRModel = mongoose.model('EMRRecord', EMRSchema);

export default EMRModel;
