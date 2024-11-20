module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {  
        rating: {
            type: DataTypes.INTEGER
        },
        des: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN  
        } 
    });

    return Review;
};
 