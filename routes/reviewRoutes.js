const reviewController = require('../controller/reviewController.js')

const router = require('express').Router()


router.post('/createReview', reviewController.addReview)
router.get('/allReviews', reviewController.getReviews)


router.get('/:id', reviewController.getSingleReview)
router.put('/:id', reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)


module.exports = router