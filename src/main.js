    
const MegaSenaApiGateway = require('./gateway/MegaSenaApiGateway');
const logger = require('./utils/logs/logger');
const readlineSync = require('readline-sync');

async function main(){

    const date = new Date();

    
    do{
        var opcao = readlineSync.question(`  Inform uma das opções abaixo:
        \n 1 - Ver o ultimo jogo
        \n 2 - Consultar ultimos jogos
        \n 3 - Sair
        \n`);

        switch (parseInt(opcao)){
            case 1:
                const loteria = await MegaSenaApiGateway.ultimoConcurso();
                logger.loggerInfo(loteria.listaDezenas,"Numero sorteado: "+loteria.dataApuracao+": ");
                break;
            case 2:
                var numConcurso = readlineSync.question(`
                    \n Informe a quantidade de concurso que deseja analisar: `)
                const ultimosConcursos = await MegaSenaApiGateway.concursoPorIntervalo(numConcurso);
                break;
            case 3:
                opcao = false;
                console.log("ok");
                break;
                
        }
    }while(opcao)
}
main()
