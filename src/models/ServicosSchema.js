const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServicosSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: {type: String, required: true},
    produto_utilizado: {type: String, required: true},
    data: {type: Date, required: false},
    valor: {type: Number, required: true},
    profissional: {type: String, required: true},
})

const servicosModel = mongoose.model('servicos', ServicosSchema);

module.exports = { servicosModel, ServicosSchema };