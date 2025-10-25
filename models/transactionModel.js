    const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  borrower_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  book_id: { type: Number, required: true },
  start_date: { type: Date, required: true },
  return_date: { type: Date },
  status: { type: String, required: true },
  deposit_paid: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);