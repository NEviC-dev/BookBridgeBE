    const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionController');

router.post('/transactions', transactionsController.createTransaction);
router.get('/transactions', transactionsController.getAllTransactions);
router.get('/transactions/:id', transactionsController.getTransactionById);
router.put('/transactions/:id', transactionsController.updateTransaction);
router.delete('/transactions/:id', transactionsController.deleteTransaction);

module.exports = router;