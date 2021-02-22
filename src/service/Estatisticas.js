const Logger = require('../utils/logs/Logger');
const AjustaDezenas = require('../utils/AjustaDezenas');

class Estatistica{
    /** 
     * Verifica o tipo de jogo de acordo com as dezenas sorteadas
     * JogosBaixos: São jogos que as dezenas foram menores que 20
     * JogosMedios: São jogos que as dezenas ficaram entra 20 e 40
     * JogosAltos: São jogos que as dezenas ficaram entra 40 e 60
     * JogosRegular: Sao jogos que houve um equilibrio nem alta ou baixa
     * JogosRegularAlto: Predomina os jogos altos, ao menos 3 dezenas altas, variando as demais
     * jogosRegularBaixo: Predomina os jogos baixos, ao menos 3 dezenas baixas, variando as demais
     * jogosRegularMedio: Predomina os jogos medios, ao menos 3 dezenas medias, variando as demais
     */
    calculaTipoDeJogos(jogos){
        var tipoDoJogo;
        
        jogos.forEach(element => {
            var dezMenoMediMaio = [0,0,0];
            console.log("tamanho" + element.listaDezenas.length);
            for(var i = 0 ; i < element.listaDezenas.length ; i++ ){
                if(parseInt(element.listaDezenas[i]) <= 20){
                    dezMenoMediMaio[0]++;
                } else if (parseInt(element.listaDezenas[i])<=40){
                    dezMenoMediMaio[1]++;
                } else if (parseInt(element.listaDezenas[i])<=60){
                    dezMenoMediMaio[2]++;
                }
            }
            var indice = dezMenoMediMaio.indexOf(Math.max(parseInt(dezMenoMediMaio)));
            
            //Verifica se as dezenas do jogo são regular
            let regular = true;

            for(var i = 0 ; i< 3; i++ ){
                if (parseInt(dezMenoMediMaio[i]) != parseInt(dezMenoMediMaio[indice])){
                    regular=false;
                    break;
                }
            }
            if(regular){
                tipoDoJogo = "Regular";
                return tipoDoJogo;
            }

            //Varifica se as dezenas do jogo são Menor, Madiano ou Maior
            if ( dezMenoMediMaio[indice] >= 3){
                switch (indice){
                    case 0:
                        console.log("JOGOBAIXO");
                        tipoDoJogo = "JogoBaixo";
                        break;
                    case 1:
                        console.log("JOGOMEDIO");
                        tipoDoJogo = "JogoBaixo";
                        break;
                    case 2:
                        console.log("JOGOALTO");
                        tipoDoJogo = "JogoBaixo";
                        break;
                }
            }
            
        });
        

    }
} 

module.exports = new Estatistica();