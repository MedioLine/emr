import express from 'express';
import emrRoutes from './routes/emrRoutes';
import { connectDB } from './config/config';

const app = express();

app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/emr', emrRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
