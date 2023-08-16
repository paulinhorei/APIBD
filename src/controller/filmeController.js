import { Router } from "express";
import { listarFilmes, inserir } from "../repository/filmeRepository.js";

let endpoints = Router();



endpoints.get('/filme/listar', async (req,  resp) => {
    let dados = await listarFilmes();
    resp.send(dados);
})


endpoints.post('./filme', async (req, resp) => {
    let filme = req.body;

    let dados = await inserir(filme);
    resp.send(dados);
})

export default endpoints;