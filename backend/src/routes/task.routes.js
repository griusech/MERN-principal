const express = require('express');
const router = express.Router();

const Task = require('../models/task')


// METODO GET - PARA VER TODAS LAS TAREAS
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks)
});

// METODO GET - PARA VER TODAS LA TAREA POR SU ID
router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
} )

// METODO POST - PARA AGREGAR DATOS
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save(); // Guardarlo en la BD

    res.json({
        status: 'Tarea Guardada'
    });
});

// METODO PUT - PARA ACTUALIZAR LAS TAREAS
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);

    res.json({
        status: 'Tarea Actualizada'
    })
});

// METODO DELETE - PARA ELIMINAR LA TAREA
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
        status: 'Tarea Eliminada'
    })
});

module.exports = router;