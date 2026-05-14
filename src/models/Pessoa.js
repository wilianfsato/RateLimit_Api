// models/Pessoa.js
const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  curso: { type: String },
  RGM: { type: String },
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;
