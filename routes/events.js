/*
    Event Routes
    /api/events
*/

import { Router } from 'express';
import { check } from 'express-validator';
import { isDate } from '../helpers/index.js';
import { validarCampos, validarJWT } from '../middlewares/index.js';
import { actualizarEvento, crearEvento, eliminarEvento, getEventos } from '../controllers/events.js';

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener eventos 
router.get('/', getEventos);

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

// Actualizar Evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento
);

// Borrar evento
router.delete('/:id', eliminarEvento);

export { router as EventsRouter, };