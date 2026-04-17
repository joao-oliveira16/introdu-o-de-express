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
import { produtos } from './ExJSON.js';


// /exercicioA?nome=João&idade=16&cidade=SP
app.get('/exercicioA', (req, res) => {
  let { nome, idade, cidade } = req.query;

  res.send(exercicioA(nome, idade, cidade));
});

app.get('/exercicioB/:A/:B', (req, res) => {
  let { A, B } = req.params;

  A = Number(A);
  B = Number(B);

  res.send(exercicioB(A, B));
});

// /exercicioC?A=10&B=20
app.get('/exercicioC', (req, res) => {
     let { A, B } = req.query;
  
    A = Number(A);
    B = Number(B);

     res.send(exercicioC(A, B));
});


app.get('/exercicioD/:idade', (req, res) => {
  let { idade } = req.params;

  idade = Number(idade);
  let carteira = idade >= 18;
  let resultado = idade >= 18 && carteira;

  res.send(exercicioD(idade, carteira));
});

// /exercicioE?nota=7
app.get('/exercicioE', (req, res) => {
  let { nota } = req.query;

  nota = Number(nota);

  res.send(exercicioE(nota));
});


app.get('/exercicioF/:dia', (req, res) => {
    let { dia } = req.params;

    dia = Number(dia);

    res.send(exercicioF(dia));
});


app.get('/exercicioG', (req, res) => {
  let { limite } = req.query;

  limite = Number(limite);

  res.send(exercicioG(limite));
});

app.get('/exercicioH/:vezes', (req, res) => {
  let { vezes } = req.params;

  vezes = Number(vezes);

  res.send(exercicioH(vezes));
});

app.get('/produtos/:id', (req, res) => {
  let { id } = req.params;
  
  id = Number(id);

  let produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.send("Produto não encontrado");
  }

  res.json(produto);
});

// SERVIDOR
app.listen(3002, () => {
    console.log('Servidor rodando em http://localhost:3002');
});

