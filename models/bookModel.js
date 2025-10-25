const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  available: { type: Boolean, default: true },
  deposit: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  cover_image: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);