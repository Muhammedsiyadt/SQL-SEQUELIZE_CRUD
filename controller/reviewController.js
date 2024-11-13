const db = require('../models')

const Review = db.reviews


// Add review [ POST ]
const addReview = async (req, res) => {
    let { rating, des, published } = req.body

    published = published !== undefined ? published : false;

    const info = { rating, des, published }

    try {
        const review = await Review.create(info)
        res.status(200).send(review)
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).send({ error: 'Failed to create review' });
    }
}

// Get all reviews [ GET ]
const getReviews = async (req, res) => {
    let allReviews = await Review.findAll({})

    res.status(200).send(allReviews)

}


// Get Single Review [ GET ]
const getSingleReview = async (req, res) => {

    let id = req.params.id
    let review = await Review.findOne({ where: { id: id } })

    res.status(200).send(review)
    // console.log(review)
}

// Update review [ PUT ]
const updateReview = async (req, res) => {
    let id = req.params.id

    const review = await Review.update(req.body, { where: { id: id } })
    res.status(200).send(review)
}

// Delete review [ DELETE ]

const deleteReview = async (req, res) => {
    let id = req.params.id
    await Review.destroy({ where: { id: id } })

    res.send('Product Is Deleted ! ')
}
 
module.exports = {
    addReview, 
    getReviews,  
    getSingleReview, 
    updateReview, 
    deleteReview
}

