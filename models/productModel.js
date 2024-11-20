
module.exports= (sequalize, DataTypes) => {
    const Product = sequalize.define("product", {
       title: {
        type: DataTypes.STRING,
        allowNull: false
       },
       price: {
        type: DataTypes.INTEGER
       },
       des: { 
        type: DataTypes.TEXT
       },
       published: { 
        type: DataTypes.BOOLEAN
       }
    })

    return Product
}