import { Schema, model } from 'mongoose';

const nameCollection = 'Usuario';

const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UsuarioModel = model(nameCollection, UsuarioSchema);


