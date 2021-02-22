    
const logger = require('./utils/logs/Logger');
const readlineSync = require('readline-sync');
const Concursos = require('./service/Concursos')

async function main(){

    const date = new Date();
    
    
    do{
        var opcao = readlineSync.question(`  Informe uma das opções abaixo:
        \n 1 - Ver o ultimo jogo
        \n 2 - Consultar ultimos jogos
        \n 3 - Analise estatistico do concurso
        \n 4 - Sair
        \n`);

        switch (parseInt(opcao)){
            case 1:
                await Concursos.ultimoConcurso();
                break;
            case 2:
                var numConcurso = readlineSync.question(`
                    \n Informe a quantidade de concurso que deseja ver: \n`)
                await Concursos.concursosPorIntervalo(numConcurso)
                break;
            case 3:
                var tipoAnalise = readlineSync.question(`
                    \n 1 - Analise de dezenas
                    \n 2 - Probabilidade de jogos 
                    \n`)
                switch(parseInt(tipoAnalise)){
                    case 1:
                        var qntdeConcurso = readlineSync.question(`
                            \n Informe a quantidade de concurso que deseja analisar: 
                            \n`) 
                        await Concursos.analiseConcursosDezenas(qntdeConcurso);
                        break;
                    case 2:
                        break;
                }
                break;
            case 4:
                opcao = false;
                console.log("Obrigado pela sua presença, saindo...");
                break;
                
        }
    }while(opcao)
}
main()
