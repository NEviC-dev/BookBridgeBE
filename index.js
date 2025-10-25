const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/bookRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// console.log(process.env.MONGODB_URI);


app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/', booksRoutes);
app.use('/api/', transactionRoutes);
app.use('/api/', userRoutes);
app.use('/api/', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});     