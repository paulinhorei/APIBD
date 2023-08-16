import conexao from "./connection.js";



export async function listarFilmes(){
    let sql = 'select * from tarefa_db';

    let resp = await conexao.query(sql);
    let dados = resp[0];


    return dados;
}


export async function inserir(filme){
    let sql = 'insert into tarefa_db (ds_tarefa, nr_ordem) values (?, ?)';

    let resp = await conexao.query(sql, [filme.nome, filme.diretor]);
    let dados = resp[0];

    filme.id = dados.insertId;
    return filme;
}