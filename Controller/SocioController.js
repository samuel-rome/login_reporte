const Socio = require("../Models/Socio");

exports.crearSocio = async (req, res) => {
  try {
    const newSocio = new Socio(req.body);
    const token = jwt.sign({id: socio._id}, config.secret, {
      expiresIn: 60 * 60 * 24
    })
    //res.json({message: 'Received'})
    const socio = await newSocio.save();
    res.status(201).json(socio);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el socio' });
  }
};

exports.obtenerSocios = async (req, res) => {
  try {
    const socios = await Socio.find();
    res.status(200).json(socios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los socios' });
  }
};


exports.obtenerSocio = async (req, res) => {
  try {
    const socio = await Socio.findById(req.params.id);
    if (!socio) {
      return res.status(404).json({ error: 'Socio no encontrado' });
    }
    res.status(200).json(socio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el socio' });
  }
};


exports.actualizarSocio = async (req, res) => {
  try {
    const socio = await Socio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!socio) {
      return res.status(404).json({ error: 'Socio no encontrado' });
    }
    res.status(200).json(socio);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el socio' });
  }
};


exports.eliminarSocio = async (req, res) => {
    try {
      const socioId = req.params.id;
  
      const socio = await Socio.findByIdAndRemove(socioId);
      if (!socio) {
        return res.status(404).json({ message: 'Socio no encontrado' });
      }
      await Prestamo.deleteMany({ socio: socioId });
  
      res.json({ message: 'Socio eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

