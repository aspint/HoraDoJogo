    
const MegaSenaApiGateway = require('./gateway/MegaSenaApiGateway');
const logger = require('./utils/logs/logger');
const readlineSync = require('readline-sync');
const Estatistica = require('./service/estatisticas')

async function main(){

    const date = new Date();
    
    
    do{
        var opcao = readlineSync.question(`  Informe uma das opções abaixo:
        \n 1 - Ver o ultimo jogo
        \n 2 - Consultar ultimos jogos
        \n 3 - Sair
        \n`);

        switch (parseInt(opcao)){
            case 1:
                const loteria = await MegaSenaApiGateway.ultimoConcurso();
                logger.loggerInfo(loteria.listaDezenas,"Dezenas sorteadas em "+loteria.dataApuracao+": ");
                break;
            case 2:
                var numConcurso = readlineSync.question(`
                    \n Informe a quantidade de concurso que deseja ver: `)
                const ultimosConcursos = await MegaSenaApiGateway.concursoPorIntervalo(numConcurso);
                console.log(ultimosConcursos)
                break;
            case 3:
                opcao = false;
                console.log("Obrigado pela sua presença, saindo...");
                
                break;
                
        }
    }while(opcao)
}
main()
