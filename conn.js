const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://Hemanth:ravva1234@cluster0.plujxf5.mongodb.net/", {
           
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB");
    }
};

conn();
module.exports = conn;
