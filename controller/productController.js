const db = require('../models')

const Product = db.products
const Review = db.reviews

// Create Products [ POST ]
const addProduct = async (req, res) => {

    let { title, price, des, published } = req.body;

    published = published !== undefined ? published : false;

    const info = { title, price, des, published };

    try {
        const product = await Product.create(info);
        res.status(200).send(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send({ error: 'Failed to create product' });
    }
};



// Get All Products [ GET ]
const getProducts = async (req, res) => {
    let allProducts = await Product.findAll({})

    res.status(200).send(allProducts)
    // console.log(allProducts)
}

 

// Get Single Products [ GET ]
const getSingleProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })

    res.status(200).send(product)
    console.log(product)
}


// Update Single Products [ PUT ]
const updateProduct = async (req, res) => {

    let id = req.params.id
    const product = await Product.update(req.body, { where: { id: id } })
 
    res.status(200).send(product) 
}


// Delete Product By Id [ GET ] 
const deleteProduct = async (req, res) => {

    let id = req.params.id
    await Product.destroy({ where: { id: id } }) 

    res.send('Product Is Deleted ! ') 
}


// Get Published Products [ GET ]
const getPublishedProduct = async (req, res) => {

    const products = await Product.find({ where: { published: true } }) 

    res.send(200).send(products)
}

module.exports = {
    addProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}
