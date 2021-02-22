const { loggerError } = require("./logs/Logger");

function ajustarDezenas(concursos){
    for(var i = 0; i < concursos.listaDezenas.length ; i++){
        concursos.listaDezenas[i] = parseInt(concursos.listaDezenas[i])
    }
    return concursos
}
module.exports.ajustarDezenas = ajustarDezenas;

