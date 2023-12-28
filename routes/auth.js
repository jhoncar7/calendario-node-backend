/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos, validarJWT } from '../middlewares/index.js';
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth.js';


const router = Router();

router.post(
    '/new',
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);


router.get('/renew', validarJWT, revalidarToken);


export { router as authRouter, };