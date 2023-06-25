
const Prestamo = require('../Models/Prestamo');
const Socio = require('../Models/Socio');
const Copia = require('../Models/Copia');


exports.crearPrestamo = async (req, res) => {
  try {
    const { socio, copia , fechaDevolucion } = req.body;

    const newPrestamo = new Prestamo({
      socio: socio,
      copia: copia,
      fechaDevolucion: fechaDevolucion
    });


    const prestamoGuardado = await newPrestamo.save();

 
    await Socio.findByIdAndUpdate(socio, { $push: { prestamo: prestamoGuardado._id } });

  
    await Copia.findByIdAndUpdate(copia, { $set: { disponible: false } });

    res.status(201).json(prestamoGuardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.obtenerPrestamos = async (req, res) => {
  try {
    const prestamos = await Prestamo.find().populate('socio').populate('copia');
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.devolverPrestamo = async (req, res) => {
  try {
    const prestamoId = req.params.id;

    const prestamo = await Prestamo.findById(prestamoId);
    if (!prestamo) {
      return res.status(404).json({ message: 'Préstamo no encontrado' });
    }

    await Copia.findByIdAndUpdate(prestamo.copia, { $set: { disponible: true } });

    await Prestamo.findByIdAndUpdate(prestamoId, { $set: { entregado: true } });

    await Socio.findByIdAndUpdate(prestamo.socio, { $pull: { prestamo: prestamoId } });

    res.json({ message: 'Préstamo devuelto exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarPrestamoHecho = async (req, res )=> {
    try {
        const prestamoId = req.params.id;
        await Prestamo.findByIdAndRemove(prestamoId);
    }catch{
        res.status(500).json({ error: error.message });
    }
}