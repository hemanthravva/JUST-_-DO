const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
     user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER'
        }
},
 { timestamps: true }
);


module.exports = mongoose.model('List', listSchema);  