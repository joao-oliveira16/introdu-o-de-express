import express from 'express';
const app = express();

import { exercicioE } from "./ExE.js";
import { exercicioF } from "./ExF.js";
import { exercicioG } from "./ExG.js";
import { exercicioH } from "./ExH.js";
import { exercicioA } from './ExA.js';
import { exercicioB } from './ExB.js';
import { exercicioC } from './ExC.js';
import { exercicioD } from './ExD.js';

// ROTAS

app.get('/exercicioA', (req, res) => {
    res.send(exercicioA());
});

app.get('/exercicioB', (req, res) => {
    res.send(exercicioB());
});

app.get('/exercicioC', (req, res) => {
    res.send(exercicioC());
});

app.get('/exercicioD', (req, res) => {
    res.send(exercicioD());
});

app.get('/exercicioE', (req, res) => {
    res.send(exercicioE());
});

app.get('/exercicioF', (req, res) => {
    res.send(exercicioF());
});

app.get('/exercicioG', (req, res) => {
    res.send(exercicioG());
});

app.get('/exercicioH', (req, res) => {
    res.send(exercicioH());
});

// SERVIDOR
app.listen(3002, () => {
    console.log('Servidor rodando em http://localhost:3002');
});

