const monggose = require('mongoose');

const productSchema = monggose.Schema({
    _id: monggose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = monggose.model('Product', productSchema);