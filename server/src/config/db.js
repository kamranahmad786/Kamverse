import mongoose from 'mongoose';

// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
export default async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI not set');
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // Throw the error and let the caller decide whether to exit or continue
    throw err;
  }
}
