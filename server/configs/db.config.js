const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect('mongodb://localhost:27017/learning').then(() => {
        console.log('Connected to MongoDB');
    }).catch(error => {
        console.error('Error connecting to MongoDB:', error);
    })
}