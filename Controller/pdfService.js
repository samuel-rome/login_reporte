// pdfService.js
const { jsPDF } = require('jspdf');
require('jspdf-autotable');
const Pelicula = require("../Models/Peliculas");
const Socio = require("../Models/Socio");

exports.generarPDF = async (req, res) => {
  try {
    // Lógica para generar el PDF utilizando los modelos Pelicula y Socio
    // ...
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
