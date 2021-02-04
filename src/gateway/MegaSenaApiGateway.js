const axios = require('axios')

var loteria;

class MegaSenaApiGateway{

    ultimoConcurso(urlUltimoJogo, Cookies){
        axios.get(urlUltimoJogo.toString(), {
            headers:{
                Cookie: Cookies.toString()
            }
        }) 
            .then(response => {
                loteria = response.data
                
                console.log(`    Ultimo jogo concurso nº: `+loteria.numero +
                `.\n    Numeros sorteado ` +loteria.dezenasSorteadasOrdemSorteio); 
                console.log('\n\n\n');
                
                return loteria;
        
            })
            .catch(err => {
                console.error(err)
                console.log("Entrou no erro");
            })
        

    }
}

module.exports = new MegaSenaApiGateway();
