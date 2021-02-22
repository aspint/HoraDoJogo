const MegaSenaApiGateway = require('../gateway/MegaSenaApiGateway');
const Logger = require ('../utils/logs/Logger');
const Estatistica = require('../service/Estatisticas')
const AjustarDezenas = require('../utils/AjustaDezenas')


class Concursos{
    async ultimoConcurso(){
        const response = await MegaSenaApiGateway.ultimoConcurso();
        let loteria = await AjustarDezenas.ajustarDezenas(response)
        Logger.loggerInfo(loteria.listaDezenas,"Dezenas sorteadas em "+loteria.dataApuracao+": ");
    }
    async concursosPorIntervalo(numConcurso){
        const ultimosConcursos = await MegaSenaApiGateway.concursoPorIntervalo(numConcurso);
        console.log(ultimosConcursos);
        Logger.loggerDebug(ultimosConcursos);
        return ultimosConcursos;
    }
    async analiseConcursosDezenas(qntdeConcurso){
        var todosResultados = await this.concursosPorIntervalo(qntdeConcurso);
        var tipoJogo = await Estatistica.calculaTipoDeJogos(todosResultados);
    }
}
module.exports = new Concursos(); 