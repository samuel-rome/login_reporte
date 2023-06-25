
const Copia = require("../Models/Copia");
const Pelicula = require("../Models/Peliculas");

exports.crearCopia = async (req, res) => {
    try {
      const { pelicula, id_cinta } = req.body;
  
      
      const copia = new Copia({
        pelicula,
        id_cinta
      });
  

      const nuevaCopia = await copia.save();
  
      await Pelicula.findByIdAndUpdate(pelicula, { $push: { copias: nuevaCopia._id } });
  
      res.json(nuevaCopia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.obtenerCopias = async (req, res) => {
    try {
      const copias = await Copia.find();
      res.json(copias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.eliminarCopia = async (req, res) => {
  try {
    const copiaId = req.params.id;

    const copiaEliminada = await Copia.findByIdAndRemove(copiaId);
    
    if (!copiaEliminada) {
      return res.status(404).json({ message: 'Copia no encontrada' });
    }
    await Pelicula.updateMany({}, { $pull: { copias: copiaId } });

    res.json({ message: 'Copia eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  