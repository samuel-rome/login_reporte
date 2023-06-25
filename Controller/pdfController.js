const Pelicula = require("../Models/Peliculas");
const Socio = require("../Models/Socio");
const { jsPDF } = require('jspdf')
require('jspdf-autotable');

exports.generarPDf = async(req,res) =>{
    try {
        const socios =  await Socio.find().lean();
        const peliculas = await Pelicula.find().lean();
        const nombreArchivo = 'reporte.pdf';
        const doc = new jsPDF();

        //tabla usuarios
        doc.setFontSize(15);   
        doc.autoTable({
        theme: 'grid',
        startY: 30,
        head: [[`Socios (${socios.length})`, 'Direccion', 'telefono', 'Fecha de Creación', 'Director Favorito']],
        body: socios.map(socio => [socio.nombre, socio.direccion, socio.telefono, socio.fechaCreacion, socio.directorFavorito])
        });

      
        // Tabla de peliculas
        doc.setFontSize(15);
        doc.autoTable({
        theme: 'grid',
        startY: 90,
        head: [[`Titulos (${peliculas.length})`,'Genero','Director','Actores', 'Copias'],],
        body: peliculas.map(pelicula => [pelicula.titulo, pelicula.genero, pelicula.director, pelicula.actores, pelicula.copias])
        });

        

        res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);
        res.setHeader('Content-Type', 'application/pdf');
        res.contentType('application/pdf');
        res.send(Buffer.from(doc.output('arraybuffer')));


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        
    }

   
}