const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    meta_data: {type:Object, required:true},
    document_id: {type:String, required:true},
    type: { type: String, required: true}
}, {
    timestamps: true,
});

module.exports = mongoose.model('File', fileSchema)