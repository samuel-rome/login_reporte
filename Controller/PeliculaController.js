const Pelicula = require("../Models/Peliculas");


exports.crearPelicula = async (req, res) => {
    try {
      const newPelicula = new Pelicula(req.body);
      const pelicula = await newPelicula.save();
      res.status(201).json(pelicula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
exports.obtenerPeliculas = async (req, res) => {
    try {
      const peliculas = await Pelicula.find();
      res.json(peliculas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
exports.obtenerPelicula = async (req, res) => {
    try {
      const pelicula = await Pelicula.findById(req.params.id);
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.json(pelicula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
exports.actualizarPelicula = async (req, res) => {
    try {
      const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.json(pelicula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
exports.eliminarPelicula = async (req, res) => {
    try {
      const peliculaId = req.params.id;
  
      const peliculaEliminada = await Pelicula.findByIdAndRemove(peliculaId);
      
      if (!peliculaEliminada) {
        return res.status(404).json({ message: 'Película no encontrada' });
      }
  
      await Copia.deleteMany({ pelicula: peliculaId });
  
      await Prestamo.deleteMany({ copia: { $in: peliculaEliminada.copias } });
  
      res.json({ message: 'Película eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  