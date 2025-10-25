const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewController');

router.post('/reviews', reviewsController.createReview);
router.get('/reviews', reviewsController.getAllReviews);
router.get('/reviews/:id', reviewsController.getReviewById);
router.put('/reviews/:id', reviewsController.updateReview);
router.delete('/reviews/:id', reviewsController.deleteReview);

module.exports = router;